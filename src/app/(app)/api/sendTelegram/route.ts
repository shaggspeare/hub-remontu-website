import { NextResponse } from "next/server";

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
const KEYCRM_API = process.env.KEYCRM_BASE_URL;
const KEYCRM_API_KEY = process.env.KEYCRM_API_KEY;

// KeyCRM Service Class
class KeyCrmService {
  private apiKey?: string;
  private baseUrl?: string;

  constructor() {
    this.apiKey = KEYCRM_API_KEY;
    this.baseUrl = KEYCRM_API;
  }

  async createPipelineCard(leadData: any): Promise<any> {
    try {
      // Check if required env variables are present
      if (!this.apiKey || !this.baseUrl) {
        throw new Error("KeyCRM API key or base URL is missing");
      }

      // Determine source_id based on form type
      const source_id = 4; // Anketa form source (you can adjust this ID)

      // Generate a unique title for the card
      const cardTitle = `Anketa Form #${Date.now()}`;

      // Prepare additional details from the anketa form
      const detailedComment = this.formatAnketaDetails(leadData);

      // Correct payload structure based on KeyCRM documentation
      const payload = {
        title: cardTitle,
        source_id: source_id,
        manager_comment: detailedComment,
        pipeline_id: 1, // You might need to adjust this based on your pipeline setup
        contact: {
          full_name: leadData.name,
          email: leadData.email || "",
          phone: leadData.phone,
        },
        utm_source: leadData.utm_source || "",
        utm_medium: leadData.utm_medium || "",
        utm_campaign: leadData.utm_campaign || "",
        utm_term: leadData.utm_term || "",
        utm_content: leadData.utm_content || "",
        // Add custom fields if needed
        custom_fields: [
          {
            uuid: "form_type",
            value: "anketa_form",
          },
          {
            uuid: "building_type",
            value: leadData.building_type || "",
          },
          {
            uuid: "design_preference",
            value: leadData.design || "",
          },
          {
            uuid: "preferred_time",
            value: leadData.time || "",
          },
        ],
      };

      console.log("Sending Anketa data to KeyCRM Pipeline Cards:", payload);
      console.log("Using URL:", `${this.baseUrl}/pipelines/cards`);

      const response = await fetch(`${this.baseUrl}/pipelines/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
          Accept: "application/json",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log("KeyCRM Response Status:", response.status);
      console.log("KeyCRM Response Body:", responseText);

      if (!response.ok) {
        console.error("KeyCRM API Error Details:", {
          status: response.status,
          statusText: response.statusText,
          url: `${this.baseUrl}/pipelines/cards`,
          payload: payload,
          response: responseText,
        });

        throw new Error(
          `KeyCRM API Error: ${response.status} ${response.statusText} - ${responseText}`,
        );
      }

      return JSON.parse(responseText);
    } catch (error) {
      console.error("Error creating pipeline card in KeyCRM:", error);
      // Don't throw, just return null to continue execution
      return null;
    }
  }

  private formatAnketaDetails(formData: any): string {
    const details = [];

    if (formData.building_type)
      details.push(`Тип нерухомості: ${formData.building_type}`);
    if (formData.design) details.push(`Дизайн-проєкт: ${formData.design}`);
    if (formData.design_detail && Array.isArray(formData.design_detail)) {
      details.push(`Деталі дизайну: ${formData.design_detail.join(", ")}`);
    }
    if (formData.age) details.push(`Вік будівлі: ${formData.age}`);
    if (formData.planning) details.push(`Перепланування: ${formData.planning}`);
    if (formData.constructions)
      details.push(`Комунікації: ${formData.constructions}`);
    if (formData.bedroom)
      details.push(`Кількість спалень: ${formData.bedroom}`);
    if (
      formData.style &&
      Array.isArray(formData.style) &&
      formData.style.length > 0
    ) {
      details.push(`Стиль: ${formData.style.join(", ")}`);
    }
    if (
      formData.floor &&
      Array.isArray(formData.floor) &&
      formData.floor.length > 0
    ) {
      details.push(`Підлога: ${formData.floor.join(", ")}`);
    }
    if (formData["floor-other"])
      details.push(`Інше по підлозі: ${formData["floor-other"]}`);
    if (
      formData.wall &&
      Array.isArray(formData.wall) &&
      formData.wall.length > 0
    ) {
      details.push(`Стіни: ${formData.wall.join(", ")}`);
    }
    if (formData["wall-other"])
      details.push(`Інше по стінах: ${formData["wall-other"]}`);
    if (
      formData.roof &&
      Array.isArray(formData.roof) &&
      formData.roof.length > 0
    ) {
      details.push(`Стеля: ${formData.roof.join(", ")}`);
    }
    if (formData.bathroom)
      details.push(`Кількість санвузлів: ${formData.bathroom}`);
    if (formData.bathroommat)
      details.push(`Матеріали санвузла: ${formData.bathroommat}`);
    if (formData.door) details.push(`Тип дверей: ${formData.door}`);
    if (
      formData.main &&
      Array.isArray(formData.main) &&
      formData.main.length > 0
    ) {
      details.push(`Пріоритети: ${formData.main.join(", ")}`);
    }
    if (formData["main-other"])
      details.push(`Інше важливе: ${formData["main-other"]}`);
    if (formData.lighting) details.push(`Освітлення: ${formData.lighting}`);
    if (formData.time) details.push(`Зручний час: ${formData.time}`);

    return details.join("\n");
  }

  // Test connection with the correct OpenAPI URL
  async testConnection(): Promise<boolean> {
    try {
      if (!this.apiKey || !this.baseUrl) {
        console.error("KeyCRM credentials missing");
        return false;
      }

      // Test with a simple GET request to pipelines endpoint
      const response = await fetch(`${this.baseUrl}/pipelines?limit=1`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          Accept: "application/json",
        },
      });

      console.log(
        "KeyCRM Connection Test:",
        response.status,
        response.statusText,
      );

      if (response.ok) {
        const data = await response.text();
        console.log(
          "Connection test response:",
          data.substring(0, 100) + "...",
        );
        return true;
      }

      return false;
    } catch (error) {
      console.error("KeyCRM Connection Test Failed:", error);
      return false;
    }
  }

  // Get available pipelines to help with configuration
  async getPipelines(): Promise<any> {
    try {
      if (!this.apiKey || !this.baseUrl) {
        return null;
      }

      const response = await fetch(`${this.baseUrl}/pipelines`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Available pipelines:", data);
        return data;
      }

      return null;
    } catch (error) {
      console.error("Failed to get pipelines:", error);
      return null;
    }
  }
}

export async function POST(req: Request) {
  const { formData } = await req.json();

  console.log("Received Anketa form data:", formData);

  try {
    // Initialize KeyCRM service
    const keyCrm = new KeyCrmService();

    // Test KeyCRM connection first
    console.log("🔐 Testing KeyCRM connection...");
    const connectionTest = await keyCrm.testConnection();
    console.log("KeyCRM Connection Test Result:", connectionTest);

    // Get available pipelines for debugging
    if (connectionTest) {
      const pipelines = await keyCrm.getPipelines();
      console.log("Available pipelines:", pipelines);
    }

    // Prepare Telegram message with detailed anketa information
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

    // Send to Telegram
    console.log("📱 Sending Anketa data to Telegram...");
    const telegramResponse = await fetch(TELEGRAM_API, {
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

    // Create Pipeline Card in KeyCRM
    let keyCrmResult = null;
    if (connectionTest) {
      console.log("🎯 Creating pipeline card in KeyCRM for Anketa...");
      keyCrmResult = await keyCrm.createPipelineCard({
        name: formData["your-name"],
        phone: formData.phone,
        email: "", // Anketa form doesn't have email field
        time: formData.time,
        building_type: formData.building_type,
        design: formData.design,
        design_detail: formData.design_detail,
        age: formData.age,
        planning: formData.planning,
        constructions: formData.constructions,
        bedroom: formData.bedroom,
        style: formData.style,
        floor: formData.floor,
        "floor-other": formData["floor-other"],
        wall: formData.wall,
        "wall-other": formData["wall-other"],
        roof: formData.roof,
        bathroom: formData.bathroom,
        bathroommat: formData.bathroommat,
        door: formData.door,
        main: formData.main,
        "main-other": formData["main-other"],
        lighting: formData.lighting,
      });

      if (keyCrmResult) {
        console.log(
          "✅ Successfully created pipeline card in KeyCRM:",
          keyCrmResult,
        );
      } else {
        console.log("❌ Failed to create pipeline card in KeyCRM");
      }
    } else {
      console.log("⏩ Skipping KeyCRM due to connection issues");
    }

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("❌ Telegram send failed:", errorText);
      throw new Error(
        `Failed to send message to Telegram: ${telegramResponse.status} ${errorText}`,
      );
    }
    console.log("✅ Telegram message sent successfully");

    return NextResponse.json({
      message: "Anketa form processed successfully!",
      telegram: "success",
      keycrm: keyCrmResult ? "success" : "failed",
      keycrm_id: keyCrmResult?.id || null,
      keycrm_contact_id: keyCrmResult?.contact_id || null,
      keycrm_type: "pipeline_card", // Indicating we used pipeline cards endpoint
    });
  } catch (error) {
    console.error("❌ Error processing Anketa form:", error);
    return NextResponse.json(
      { error: "Error processing Anketa form submission" },
      { status: 500 },
    );
  }
}
