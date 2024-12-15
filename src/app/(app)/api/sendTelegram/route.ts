import { NextResponse } from "next/server";

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

export async function POST(req: Request) {
  const { formData } = await req.json();

  try {
    const message = `
*Нове Заповнення Анкети*
======================
👤 *Ім'я*: ${formData["your-name"]}

📞 *Телефон*: ${formData.phone}

🏢 *Тип Нерухомості*: ${formData.building_type}

📝 *Дизайн*: ${formData.design}
🔍 *Деталі Дизайну*: ${formData.design_detail.join(", ")}

🏠 *Вік Будівлі*: ${formData.age}
🔄 *Перепланування*: ${formData.planning}
🔧 *Комунікації*: ${formData.constructions}
🛏️ *Кількість Спалень*: ${formData.bedroom}

🎨 *Бажаний Стиль*: ${formData.style.join(", ") || "Не обрано"}

🪵 *Уподобання по Підлозі*: ${formData.floor.join(", ") || "Не обрано"}
🔧 *Інше по Підлозі*: ${formData["floor-other"]}

🧱 *Уподобання по Стінах*: ${formData.wall.join(", ") || "Не обрано"}
🔧 *Інше по Стінах*: ${formData["wall-other"]}

🏠 *Уподобання по Стелі*: ${formData.roof.join(", ") || "Не обрано"}

🚿 *Кількість Санвузлів*: ${formData.bathroom}
🛁 *Матеріали Санвузла*: ${formData.bathroommat}

🚪 *Тип Дверей*: ${formData.door}

🌟 *Найважливіше в Інтер'єрі*: ${formData.main.join(", ") || "Не обрано"}
🔧 *Інше, що важливо*: ${formData["main-other"]}

💡 *Уподобання по Освітленню*: ${formData.lighting}

⏰ *Зручний Час для Зв'язку*: ${formData.time}
`;

    const response = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_USER_ID,
        text: message,
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
    console.error("Error sending message to Telegram: ", error);
    return NextResponse.json(
      { error: "Error sending message to Telegram" },
      { status: 500 }
    );
  }
}
