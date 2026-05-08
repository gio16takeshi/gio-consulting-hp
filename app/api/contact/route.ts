import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "gio.16.take@gmail.com";

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "必須項目が未入力です" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Gioお問い合わせフォーム <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Gioお問い合わせ] ${name}様より`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#1a1a2e;border-bottom:2px solid #0ABAB5;padding-bottom:8px;">
            Gioホームページからのお問い合わせ
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr>
              <td style="padding:8px 0;color:#475569;width:140px;">お名前</td>
              <td style="padding:8px 0;color:#1a1a2e;font-weight:bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#475569;">会社名・屋号</td>
              <td style="padding:8px 0;color:#1a1a2e;">${company || "（未記入）"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#475569;">返信用メール</td>
              <td style="padding:8px 0;color:#0ABAB5;">
                <a href="mailto:${email}" style="color:#0ABAB5;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f8fafc;border-radius:8px;">
            <p style="color:#475569;margin:0 0 8px;font-size:13px;">ご相談内容</p>
            <p style="color:#1a1a2e;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] send error:", e);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
