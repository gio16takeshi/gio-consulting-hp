"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const CONTACT_EMAIL = "gio.16.take@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("送信エラー");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            まずは、気軽にご相談ください。
          </h2>
          <p className="mt-4 text-sm text-ink-soft md:text-base">
            30分の無料オンライン相談から始められます。
            <br className="hidden sm:inline" />
            営業や売り込みは一切しません。
          </p>
        </div>

        {status === "error" && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            送信に失敗しました。時間をおいて再度お試しいただくか、直接メールでご連絡ください。
          </div>
        )}
        {status === "success" ? (
          <div className="rounded-3xl border border-brand/30 bg-brand-light/40 p-8 md:p-10 text-center">
            <CheckCircle2
              size={44}
              className="mx-auto text-brand"
              strokeWidth={1.6}
            />
            <h3 className="mt-4 text-xl font-bold text-navy md:text-2xl">
              お問い合わせいただき、ありがとうございます。
            </h3>
            <p className="mt-3 text-sm text-ink-soft md:text-base leading-relaxed">
              メールアプリが開きましたので、そのまま送信してください。
              <br />
              通常24時間以内にご返信いたします。
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setForm({ name: "", company: "", email: "", message: "" });
              }}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white border border-brand/40 px-6 py-2.5 text-sm font-medium text-brand hover:bg-brand-light transition-colors"
            >
              もう一度入力する
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-100 bg-paper p-6 md:p-10 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                お名前 <span className="text-brand">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                会社名・屋号 <span className="text-ink-soft">（任意）</span>
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                placeholder="株式会社○○"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                メールアドレス <span className="text-brand">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                placeholder="example@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                ご相談内容 <span className="text-brand">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition resize-none"
                placeholder="お気軽にどうぞ。「何から相談していいか分からない」だけでもOKです。"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white shadow-md hover:bg-brand-dark hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  準備中…
                </>
              ) : (
                <>
                  <Send size={16} />
                  この内容で送信する
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-ink-soft">
              <Mail size={13} className="text-brand shrink-0" />
              <span>
                直接メールでも：
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand hover:underline ml-1"
                >
                  {CONTACT_EMAIL}
                </a>
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
