"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Aurora背景：グラデーションがゆっくり左右に動く */}
      <div className="absolute inset-0 -z-10 animate-aurora" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/70 px-4 py-1.5 text-xs font-medium text-brand backdrop-blur-sm">
            <Sparkles size={14} />
            非エンジニア発のAIコンサルタント
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-navy sm:text-5xl md:text-6xl">
            AIで、あなたの
            <br className="sm:hidden" />
            ビジネスを
            <br />
            {/* ⑤ 「前に進める。」が光るshimmerアニメーション */}
            <span className="text-shimmer">前に進める。</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg max-w-2xl">
            「何から始めればいいか分からない」を抜け出して、
            <br className="hidden sm:inline" />
            現場で本当に使えるAI活用を、一緒に作ります。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white shadow-md hover:bg-brand-dark hover:shadow-lg transition-all"
            >
              無料相談を予約する
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#before-after"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white/80 px-7 py-3.5 text-sm font-medium text-navy hover:border-navy/40 transition-colors"
            >
              実績を見る
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-soft">
            <span className="font-medium text-navy">株式会社 Sum-Sets</span>
            <span className="opacity-40">/</span>
            <span>埼玉・東京</span>
            <span className="opacity-40">/</span>
            <span>Claude Code・Dify・Make 実装</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
