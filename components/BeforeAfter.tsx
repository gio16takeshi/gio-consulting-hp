import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { cases } from "@/data/beforeAfter";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Before / After
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            実際にあった、現場の変化
          </h2>
          <p className="mt-4 text-sm text-ink-soft md:text-base">
            自社のペットホテル「ワンルーク江東区亀戸店」で実証した、
            <br className="hidden sm:inline" />
            すぐ転用できる事例をそのままご紹介します。
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl border border-slate-100 bg-paper p-6 md:p-10 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-bold text-navy md:text-2xl">
                  {c.title}
                </h3>
                <span className="self-start inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
                  {c.tag}
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6">
                {/* Before */}
                <div className="rounded-2xl bg-white border border-slate-100 p-5 md:p-6">
                  <div className="text-[11px] font-semibold tracking-widest text-ink-soft uppercase">
                    Before
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink md:text-base">
                    {c.before}
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center text-brand">
                  <ArrowRight size={28} />
                </div>
                <div className="flex md:hidden items-center justify-center text-brand py-1">
                  <ArrowDown size={22} />
                </div>

                {/* After */}
                <div className="rounded-2xl bg-white border border-brand/30 p-5 md:p-6 shadow-sm">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-brand uppercase">
                    <Sparkles size={12} />
                    After
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink md:text-base">
                    {c.after}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-navy text-white px-5 py-4 md:px-6 md:py-4">
                <span className="text-[11px] font-semibold tracking-widest text-brand uppercase">
                  Result
                </span>
                <p className="mt-1 text-sm font-medium md:text-base">
                  {c.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
