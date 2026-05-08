// チャットログをGoogleスプレッドシートに記録するユーティリティ
// 設定方法：.env.local に CHAT_LOG_WEBHOOK_URL を追加するだけで有効化される。
// 未設定の場合はログ記録をスキップ（本体の動作には一切影響しない）。

export type ChatLogEntry = {
  timestamp: string;      // ISO 8601
  userMessage: string;    // ユーザーの質問
  assistantReply: string; // Gioアシスタントの回答
};

/**
 * Google Apps Script の Webhook URL に Q&A ペアを送信する。
 * fire-and-forget（失敗してもチャット本体には影響しない）。
 */
export async function logChatToSheet(entry: ChatLogEntry): Promise<void> {
  const webhookUrl = process.env.CHAT_LOG_WEBHOOK_URL;
  if (!webhookUrl) return; // 未設定なら静かにスキップ

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
  } catch {
    // ログ失敗は無視（コンソールにも出さない）
  }
}
