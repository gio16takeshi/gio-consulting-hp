// 実績・数字（Resultsセクション用）
// 値は配列を編集するだけで増減・修正・削除できます。
// プレースホルダーから実数値に差し替えるときは value だけ更新してください。

export type ResultItem = {
  value: string;
  unit: string;
  label: string;
  caption?: string;
};

export const results: ResultItem[] = [
  {
    value: "5",
    unit: "社",
    label: "AI導入支援実績",
    caption: "中小企業・店舗・個人事業主を中心に",
  },
  {
    value: "12",
    unit: "件",
    label: "自動化した業務",
    caption: "LINE応答・マニュアル・採用資料 ほか",
  },
  {
    value: "300",
    unit: "h",
    label: "削減できた月間工数",
    caption: "自社ペットサロン・ホテルほか合算",
  },
  {
    value: "20",
    unit: "名+",
    label: "関わった経営者",
    caption: "セミナー・1on1相談あわせて",
  },
];
