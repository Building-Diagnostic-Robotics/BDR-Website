// app/api/quoteForm/route.ts  (or quote/route.ts if that’s your folder)
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    // build a plain-text body:
    const body = Array.from(data.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Building Diagnostic Robotics" <${process.env.SMTP_USER}>`,
      to: "bilal.sher@bdx-robotics.com",
      replyTo: data.get("email") as string,
      subject: "New Free Quote Request",
      text: body,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ [quoteForm] sendMail failed:", err);
    return NextResponse.json(
      { success: false, message: "Sorry, we couldn't send your request right now. Please try again later." },
      { status: 500 }
    );
  }
}