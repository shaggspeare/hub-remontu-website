import { NextResponse } from "next/server";

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  try {
    const telegramMessage = `
*Нове Заповнення Форми Контакту*
======================
👤 *Ім'я*: ${name}
📧 *Email*: ${email}
📞 *Телефон*: ${phone}
💬 *Коментар*: ${message}
`;

    const response = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_USER_ID,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({
      message: "Message sent to Telegram successfully!",
    });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return NextResponse.json(
      { error: "Error sending message to Telegram" },
      { status: 500 }
    );
  }
}
