import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gio | AIで、あなたのビジネスを前に進める。",
  description:
    "非エンジニアの視点から、現場で使えるAI活用を一緒に作るAIコンサルタント。中小企業オーナー・店舗経営者・個人事業主向けに、AI導入コンサル・セミナー・業務自動化の実装支援を提供。",
  keywords: [
    "AIコンサル",
    "AI導入",
    "中小企業",
    "業務自動化",
    "Claude",
    "Dify",
    "Make",
    "Gio",
    "Give&Grow",
  ],
  authors: [{ name: "Gio（株式会社Sum-Sets）" }],
  openGraph: {
    title: "Gio | AIで、あなたのビジネスを前に進める。",
    description:
      "非エンジニアの視点から、現場で使えるAI活用を一緒に作ります。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
