import { results } from "@/data/results";

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Results
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            数字で見る、これまでの実装
          </h2>
          <p className="mt-4 text-sm text-ink-soft md:text-base">
            自社のペットサロンでの実証から始め、
            少しずつ仲間の経営者にも展開しています。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-slate-100 bg-paper px-4 py-6 text-center md:px-6 md:py-8 hover:border-brand/40 hover:shadow-md transition-all"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold text-brand md:text-5xl">
                  {r.value}
                </span>
                <span className="text-base font-semibold text-navy md:text-lg">
                  {r.unit}
                </span>
              </div>
              <div className="mt-2 text-sm font-medium text-navy md:text-base">
                {r.label}
              </div>
              {r.caption && (
                <div className="mt-1 text-[11px] leading-relaxed text-ink-soft md:text-xs">
                  {r.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-soft md:text-sm">
          ※ 数字は2026年5月時点の概算値です。詳細は個別にご共有します。
        </p>
      </div>
    </section>
  );
}
