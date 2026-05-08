"use client";

import { Award, Heart, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            About
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            非エンジニアだからこそ、現場の言葉で話せる。
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-14 items-start">
          {/* プロフィール写真 */}
          {/* ★ 差し替え方法：public/images/profile.jpg に写真を置くと自動で切り替わります */}
          <div className="mx-auto w-full max-w-[280px]">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-light via-paper to-navy/10 ring-1 ring-slate-100 shadow-sm flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.png"
                alt="Gio 代表"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // プロフィール写真が未設定の場合はプレースホルダーを表示
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="mt-4 text-center md:text-left">
              <div className="text-base font-bold text-navy">
                Gio 〜 Give＆Grow 〜
              </div>
              <div className="text-xs text-ink-soft">
                株式会社Sum-Sets 代表 / AIコンサルタント
              </div>
            </div>
          </div>

          {/* プロフィール本文 */}
          <div>
            <p className="text-base leading-relaxed text-ink md:text-lg">
              元々は、営業とコーチングの世界にいました。
              数字や成果に向き合いながら、
              「人の話を聞き、人の背中を押す」ことをずっと仕事にしてきました。
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink md:text-lg">
              ある時、自身が経営している「ペットサロン＆ペットホテル」の業務を、
              <span className="text-brand font-semibold">
                AIで一つひとつ自動化していく実験
              </span>
              を始めました。
              技術職のスタッフが事務作業に手を取られず、サービス・スキルアップ・
              お客様とのコミュニケーションに時間を使える環境を作りたかった。
              非エンジニアの自分が、一歩ずつ仕組みを作れていくのが、
              面白くてたまらなかった。
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink md:text-lg">
              気づけば、同じように
              「AIを使ってみたいけど何から始めれば？」
              と悩む経営者の方々から、相談を受けるようになっていました。
              そこから、AIコンサルとしての活動が始まっています。
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-paper p-4">
                <Heart size={18} className="text-brand" />
                <div className="mt-2 text-sm font-semibold text-navy">
                  現場目線
                </div>
                <div className="mt-1 text-xs text-ink-soft leading-relaxed">
                  自社で実装してから語る。机上の空論はしない。
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-paper p-4">
                <Lightbulb size={18} className="text-brand" />
                <div className="mt-2 text-sm font-semibold text-navy">
                  非エンジニア
                </div>
                <div className="mt-1 text-xs text-ink-soft leading-relaxed">
                  難しい言葉は使わない。あなたの言葉で話す。
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-paper p-4">
                <Award size={18} className="text-brand" />
                <div className="mt-2 text-sm font-semibold text-navy">
                  並走スタンス
                </div>
                <div className="mt-1 text-xs text-ink-soft leading-relaxed">
                  作って終わりじゃない。使えるまで一緒に走る。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
