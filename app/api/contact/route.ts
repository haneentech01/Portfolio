import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // 1) حفظ الرسالة في Supabase
    const { error: dbError } = await supabaseAdmin.from("contacts").insert({
      name,
      email,
      message,
    });

    if (dbError) {
      console.error("DB error:", dbError);
      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    // 2) إرسال إيميل لك
    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (toEmail) {
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>", // ممكن تغيّريها بعد تفعيل الدومين
        to: toEmail,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}