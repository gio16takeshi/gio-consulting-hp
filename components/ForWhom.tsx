import { Check } from "lucide-react";
import { forWhomItems } from "@/data/forWhom";

export default function ForWhom() {
  return (
    <section id="for-whom" className="py-20 md:py-28 bg-paper">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            For Whom
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            こんな方の力になれます
          </h2>
          <p className="mt-4 text-sm text-ink-soft md:text-base">
            ひとつでも当てはまったら、まずは無料相談からどうぞ。
          </p>
        </div>

        <ul className="grid gap-3 md:grid-cols-2 md:gap-4">
          {forWhomItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 md:px-6 md:py-5 hover:border-brand/40 hover:shadow-sm transition-all"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="text-sm text-ink leading-relaxed md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
