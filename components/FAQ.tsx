"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-paper">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            よくいただく質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-100 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-paper transition-colors"
                >
                  <span className="text-sm font-semibold text-navy md:text-base">
                    Q. {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm leading-relaxed text-ink-soft md:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
