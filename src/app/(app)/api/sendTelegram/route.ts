import { NextResponse } from "next/server";

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

export async function POST(req: Request) {
  const { formData } = await req.json();

  try {
    // Using HTML formatting instead of Markdown to avoid parsing issues
    const message = `
<b>Нове Заповнення Анкети</b>
======================
👤 <b>Ім'я</b>: ${formData["your-name"]}

📞 <b>Телефон</b>: ${formData.phone}

🏢 <b>Тип Нерухомості</b>: ${formData.building_type}

📝 <b>Дизайн</b>: ${formData.design}
🔍 <b>Деталі Дизайну</b>: ${Array.isArray(formData.design_detail) ? formData.design_detail.join(", ") : formData.design_detail || "Не обрано"}

🏠 <b>Вік Будівлі</b>: ${formData.age}
🔄 <b>Перепланування</b>: ${formData.planning}
🔧 <b>Комунікації</b>: ${formData.constructions}
🛏️ <b>Кількість Спалень</b>: ${formData.bedroom}

🎨 <b>Бажаний Стиль</b>: ${Array.isArray(formData.style) ? formData.style.join(", ") : formData.style || "Не обрано"}

🪵 <b>Уподобання по Підлозі</b>: ${Array.isArray(formData.floor) ? formData.floor.join(", ") : formData.floor || "Не обрано"}
🔧 <b>Інше по Підлозі</b>: ${formData["floor-other"] || "Не вказано"}

🧱 <b>Уподобання по Стінах</b>: ${Array.isArray(formData.wall) ? formData.wall.join(", ") : formData.wall || "Не обрано"}
🔧 <b>Інше по Стінах</b>: ${formData["wall-other"] || "Не вказано"}

🏠 <b>Уподобання по Стелі</b>: ${Array.isArray(formData.roof) ? formData.roof.join(", ") : formData.roof || "Не обрано"}

🚿 <b>Кількість Санвузлів</b>: ${formData.bathroom}
🛁 <b>Матеріали Санвузла</b>: ${formData.bathroommat}

🚪 <b>Тип Дверей</b>: ${formData.door}

🌟 <b>Найважливіше в Інтер'єрі</b>: ${Array.isArray(formData.main) ? formData.main.join(", ") : formData.main || "Не обрано"}
🔧 <b>Інше, що важливо</b>: ${formData["main-other"] || "Не вказано"}

💡 <b>Уподобання по Освітленню</b>: ${formData.lighting}

⏰ <b>Зручний Час для Зв'язку</b>: ${formData.time}
`;

    const response = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_USER_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Telegram API error:", errorText);
      throw new Error(
        `Failed to send message to Telegram: ${response.status} ${errorText}`,
      );
    }

    return NextResponse.json({
      message: "Message sent to Telegram successfully!",
    });
  } catch (error) {
    console.error("Error sending message to Telegram: ", error);
    return NextResponse.json(
      { error: "Error sending message to Telegram" },
      { status: 500 },
    );
  }
}
