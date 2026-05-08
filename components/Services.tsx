"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            提供しているサービス
          </h2>
          <p className="mt-4 text-sm text-ink-soft md:text-base">
            「自分でも使えるAI」を、現場まで届けるための3つの入り口。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 md:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-brand/30 transition-all"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">
                  {s.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-brand"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs text-ink-soft">{s.priceLabel}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                  >
                    相談する
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
