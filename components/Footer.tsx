import { Mail, MapPin, Building2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex h-9 w-9 overflow-hidden rounded-xl shadow-sm"
                aria-hidden
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gio-logo.png" alt="" className="h-full w-full object-contain" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-navy">
                Gio
              </span>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed">
              AIで、あなたのビジネスを前に進める。
              <br />
              非エンジニアの視点から、現場で使えるAI活用を一緒に作ります。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy mb-3">運営</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li className="flex items-start gap-2">
                <Building2 size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>株式会社 Sum-Sets</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>東京・埼玉</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy mb-3">お問い合わせ</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                <a
                  href="mailto:gio.16.take@gmail.com"
                  className="hover:text-brand transition-colors break-all"
                >
                  gio.16.take@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-ink-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>© {year} Gio / 株式会社Sum-Sets. All rights reserved.</span>
          <span>非エンジニアでも使えるAIを、現場目線で。</span>
        </div>
      </div>
    </footer>
  );
}
