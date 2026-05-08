"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };

const INITIAL_GREETING: ChatMessage = {
  role: "assistant",
  content:
    "こんにちは！Gioのアシスタントです。サービス内容・費用・実績など、お気軽にどうぞ。",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      // 開いた直後にフォーカス（モバイルで勝手にキーボードが開かないよう若干遅延）
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || sending) return;
    setInput("");
    setSending(true);
    const next: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((m) => m !== INITIAL_GREETING),
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "通信エラー");
      }
      const data = (await res.json()) as ChatMessage;
      setMessages((prev) => [...prev, data]);
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : "通信エラーが発生しました。";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `${errMsg}\nしばらくしてからもう一度お試しください。`,
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enterで送信、Shift+Enterで改行
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* 開閉ボタン（チャット閉じているときのみ表示） */}
      {!open && (
        <button
          type="button"
          aria-label="チャットを開く"
          onClick={() => setOpen(true)}
          className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl hover:bg-brand-dark transition-all scale-100"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* チャットウィンドウ */}
      <div
        className={`fixed z-40 right-0 bottom-0 md:right-6 md:bottom-24 origin-bottom-right transition-all duration-300 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="w-screen h-[85vh] sm:w-[360px] sm:h-[520px] md:w-[380px] md:h-[560px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
          {/* ヘッダー */}
          <div className="flex items-center justify-between gap-3 bg-navy text-white px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 overflow-hidden rounded-lg bg-white" aria-hidden>
                <img src="/images/gio-logo.png" alt="" className="h-full w-full object-contain" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Gioのアシスタント</div>
                <div className="text-[11px] text-white/70">通常数十秒で返答</div>
              </div>
            </div>
            <button
              type="button"
              aria-label="閉じる"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/80 hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* メッセージエリア */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto bg-paper px-4 py-4 space-y-3"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-brand text-white rounded-br-md"
                      : "bg-white text-ink border border-slate-100 rounded-bl-md"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-100 px-3.5 py-2.5 text-sm text-ink-soft">
                  <Loader2 size={14} className="animate-spin" />
                  返答を考えています…
                </div>
              </div>
            )}
          </div>

          {/* 入力エリア */}
          <div className="border-t border-slate-100 bg-white px-3 py-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="メッセージを入力…"
                rows={1}
                className="flex-1 resize-none rounded-2xl border border-slate-200 bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none max-h-32"
              />
              <button
                type="button"
                onClick={send}
                disabled={sending || !input.trim()}
                aria-label="送信"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow hover:bg-brand-dark disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="mt-1.5 text-[10px] text-ink-soft text-center">
              AIが回答するため、内容は念のためご確認ください。
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
