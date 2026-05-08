// Anthropic SDK初期化（サーバー側専用）
// APIキーは環境変数 ANTHROPIC_API_KEY をサーバー側でのみ参照する。
// クライアントには絶対に露出させない。

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Next.js Turbopack の dev モードで process.env に .env.local が反映されない場合の保険。
// lib/anthropic.ts の実際のパスから .env.local を直接読み込む。
function loadDotEnvLocalFallback() {
  if (process.env.ANTHROPIC_API_KEY) return; // 既にセット済みならスキップ
  try {
    // import.meta.url → このファイルの絶対パス → 1段上がるとプロジェクトルート
    const __filename = fileURLToPath(import.meta.url);
    const projectRoot = resolve(dirname(__filename), "..");
    const envPath = resolve(projectRoot, ".env.local");
    const content = readFileSync(envPath, "utf-8");
    const match = content.match(/^ANTHROPIC_API_KEY=(.+)$/m);
    if (match?.[1]) {
      process.env.ANTHROPIC_API_KEY = match[1].trim();
      console.log("[anthropic] .env.local から ANTHROPIC_API_KEY を手動ロードしました");
    }
  } catch {
    // ファイルが存在しない・読めない場合は無視
  }
}

loadDotEnvLocalFallback();

let cached: Anthropic | null = null;

export function getAnthropicClient(): Anthropic {
  if (cached) return cached;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY is not set. .env.local に設定してください。"
    );
  }
  cached = new Anthropic({ apiKey });
  return cached;
}

export const CHAT_MODEL = "claude-sonnet-4-6";
export const CHAT_MAX_TOKENS = 1024;
