// ヘッダーナビゲーション項目（ページ内アンカー）

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#results" },
  { label: "事例", href: "#before-after" },
  { label: "プロフィール", href: "#about" },
  { label: "FAQ", href: "#faq" },
];
