"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // メニューオープン中は背景スクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2 group">
          <span
            className="inline-flex h-9 w-9 overflow-hidden rounded-xl shadow-sm group-hover:scale-105 transition-transform"
            aria-hidden
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gio-logo.png" alt="" className="h-full w-full object-contain" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-navy">
            Gio
            <span className="ml-2 text-xs font-normal text-ink-soft hidden sm:inline">
              AIコンサルタント
            </span>
          </span>
        </a>

        {/* PC ナビ */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            無料相談を予約
          </a>
        </nav>

        {/* モバイル：メニューボタン */}
        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-paper"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* モバイル：オーバーレイメニュー */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink hover:bg-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-white shadow-sm"
            >
              無料相談を予約
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
