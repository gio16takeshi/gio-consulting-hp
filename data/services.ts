// 提供サービス（Servicesセクション用）

import type { LucideIcon } from "lucide-react";
import { Compass, GraduationCap, Settings2 } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  priceLabel: string;
};

export const services: Service[] = [
  {
    icon: Compass,
    title: "AI導入コンサルティング",
    subtitle: "「どこから始めるか」を一緒に決める",
    description:
      "現場の業務をヒアリングして、AIでまず効果が出る一手を見つけます。机上の空論ではなく、その場で動くサンプルまで作って意思決定を後押しします。",
    features: [
      "現場ヒアリング → 課題洗い出し",
      "費用対効果を見ながら導入順を設計",
      "実装パートナーまで含めた並走",
    ],
    priceLabel: "個別にご相談ください",
  },
  {
    icon: GraduationCap,
    title: "AIセミナー・勉強会",
    subtitle: "経営者・現場の人が「自分で使える」ようになる",
    description:
      "難しい用語を一切使わずに、ChatGPT・Claude・Difyを業務でどう使うかを実演形式でお伝えします。社内勉強会・経営者向け1日講座どちらも対応します。",
    features: [
      "経営者向け1日講座",
      "店舗・店長向け実務トレーニング",
      "オンライン / オフライン対応",
    ],
    priceLabel: "個別にご相談ください",
  },
  {
    icon: Settings2,
    title: "業務自動化の実装支援",
    subtitle: "「人がやらなくていい仕事」をAIに任せる",
    description:
      "Claude Code・Dify・Make を組み合わせて、LINE応答・問い合わせ振り分け・資料生成・SNS下書きまで自動化。ワンルーク亀戸店で実証済みの仕組みをそのまま転用します。",
    features: [
      "LINE / メールの一次応答自動化",
      "業務マニュアル・採用資料の生成",
      "毎月のレポート自動作成",
    ],
    priceLabel: "個別にご相談ください",
  },
];
