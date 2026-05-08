import { NextRequest, NextResponse } from "next/server";
import { getAnthropicClient, CHAT_MODEL, CHAT_MAX_TOKENS } from "@/lib/anthropic";
import { chatbotSystemPrompt } from "@/data/chatbotPrompt";
import { logChatToSheet } from "@/lib/chatLogger";

// Edgeランタイムは @anthropic-ai/sdk の依存と相性が悪い場合があるので nodejs を明示
export const runtime = "nodejs";

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };

const MAX_HISTORY = 20;
const MAX_USER_LENGTH = 2000;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が不正です。" },
      { status: 400 }
    );
  }

  const messages = (body as { messages?: unknown }).messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "messages配列が必要です。" },
      { status: 400 }
    );
  }

  // バリデーション・サニタイズ
  const sanitized: ChatMessage[] = [];
  for (const m of messages.slice(-MAX_HISTORY)) {
    if (
      typeof m === "object" &&
      m !== null &&
      "role" in m &&
      "content" in m &&
      typeof (m as { content: unknown }).content === "string"
    ) {
      const role = (m as { role: unknown }).role;
      const content = String((m as { content: string }).content).slice(
        0,
        MAX_USER_LENGTH
      );
      if (role === "user" || role === "assistant") {
        sanitized.push({ role, content });
      }
    }
  }
  if (sanitized.length === 0 || sanitized[sanitized.length - 1].role !== "user") {
    return NextResponse.json(
      { error: "最後のメッセージはuserロールである必要があります。" },
      { status: 400 }
    );
  }

  try {
    const anthropic = getAnthropicClient();
    const response = await anthropic.messages.create({
      model: CHAT_MODEL,
      max_tokens: CHAT_MAX_TOKENS,
      system: chatbotSystemPrompt,
      messages: sanitized,
    });

    const text = response.content
      .map((block) => (block.type === "text" ? block.text : ""))
      .join("")
      .trim();

    const replyText = text || "申し訳ありません、うまく返答を作成できませんでした。";

    // スプレッドシートへのログ記録（fire-and-forget・失敗しても本体に影響なし）
    void logChatToSheet({
      timestamp: new Date().toISOString(),
      userMessage: sanitized[sanitized.length - 1].content,
      assistantReply: replyText,
    });

    return NextResponse.json({
      role: "assistant",
      content: replyText,
    });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json(
      {
        error:
          "サーバーでエラーが発生しました。少し時間をおいて再度お試しください。",
      },
      { status: 500 }
    );
  }
}
