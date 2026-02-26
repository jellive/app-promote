import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // RESEND_API_KEY가 없으면 mailto 폴백 정보 반환
    if (!apiKey) {
      return NextResponse.json(
        { fallback: true, email: "jellive7@gmail.com" },
        { status: 200 },
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jellive7@gmail.com",
      replyTo: email,
      subject: `[포트폴리오 문의] ${name}님의 메시지`,
      text: `보낸 사람: ${name}\n이메일: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "전송에 실패했습니다. 이메일로 직접 연락해주세요." },
      { status: 500 },
    );
  }
}
