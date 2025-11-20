import { NextResponse } from "next/server";

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
const KEYCRM_API = process.env.KEYCRM_BASE_URL;
const KEYCRM_API_KEY = process.env.KEYCRM_API_KEY;

// Helper function to send Telegram message to multiple users
async function sendToMultipleTelegramUsers(
  message: string,
  parseMode: "HTML" | "Markdown" = "HTML",
): Promise<{ success: boolean; results: any[] }> {
  // Get user IDs from environment variable (comma-separated)
  const userIds =
    process.env.TELEGRAM_USER_IDS?.split(",").map((id) => id.trim()) || [];

  // Fallback to single user ID if TELEGRAM_USER_IDS is not set
  if (userIds.length === 0 && process.env.TELEGRAM_USER_ID) {
    userIds.push(process.env.TELEGRAM_USER_ID);
  }

  if (userIds.length === 0) {
    throw new Error("No Telegram user IDs configured");
  }

  console.log(`📱 Sending message to ${userIds.length} Telegram user(s)`);

  // Send message to all users
  const results = await Promise.allSettled(
    userIds.map((chatId) =>
      fetch(TELEGRAM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: parseMode,
        }),
      }).then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed for user ${chatId}: ${response.status} ${errorText}`,
          );
        }
        return { chatId, status: "success" };
      }),
    ),
  );

  // Log results
  const successful = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.filter((r) => r.status === "rejected").length;

  console.log(
    `✅ Telegram: ${successful} successful, ${failed} failed out of ${userIds.length}`,
  );

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`❌ Failed to send to user ${userIds[index]}:`, result.reason);
    }
  });

  return {
    success: successful > 0,
    results: results.map((r, i) => ({
      userId: userIds[i],
      status: r.status,
      error: r.status === "rejected" ? r.reason.message : null,
    })),
  };
}

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

      // Prepare additional details from the simplified anketa form
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
        fbclid: leadData.fbclid || "",
        gclid: leadData.gclid || "",
        // Add custom fields if needed
        custom_fields: [
          {
            uuid: "form_type",
            value: "anketa_form_simplified",
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
            uuid: "timing",
            value: leadData.timing || "",
          },
          {
            uuid: "housing_type",
            value: leadData.housing_type || "",
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
      details.push(`Тип об'єкту: ${formData.building_type}`);
    if (formData.design) details.push(`Дизайн-проєкт: ${formData.design}`);
    if (formData.timing) details.push(`Терміни роботи: ${formData.timing}`);
    if (formData.housing_type)
      details.push(`Тип житла: ${formData.housing_type}`);

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
  const requestData = await req.json();
  const { formData, ...trackingParams } = requestData;

  console.log("Received Anketa form data:", formData);
  console.log("Received tracking parameters:", trackingParams);

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

    // Prepare simplified Telegram message
    const message = `
<b>Нове Заповнення Анкети</b>
======================
👤 <b>Ім'я</b>: ${formData["your-name"]}

📞 <b>Телефон</b>: ${formData.phone}

🏢 <b>Тип об'єкту</b>: ${formData.building_type}

📝 <b>Дизайн-проєкт</b>: ${formData.design}

⏰ <b>Терміни роботи</b>: ${formData.timing}

🏠 <b>Тип житла</b>: ${formData.housing_type}

📊 <b>Дані Відстеження</b>:
${trackingParams.utm_source ? `🔗 Джерело: ${trackingParams.utm_source}` : ""}
${trackingParams.utm_medium ? `📱 Канал: ${trackingParams.utm_medium}` : ""}
${trackingParams.utm_campaign ? `🎯 Кампанія: ${trackingParams.utm_campaign}` : ""}
${trackingParams.utm_content ? `📄 Контент: ${trackingParams.utm_content}` : ""}
${trackingParams.utm_term ? `🔍 Термін: ${trackingParams.utm_term}` : ""}
${trackingParams.fbclid ? `📘 Facebook ID: ${trackingParams.fbclid.substring(0, 20)}...` : ""}
${trackingParams.gclid ? `🔍 Google ID: ${trackingParams.gclid.substring(0, 20)}...` : ""}
`;

    // Send to Telegram (multiple users)
    console.log("📱 Sending Anketa data to Telegram...");
    const telegramResult = await sendToMultipleTelegramUsers(message, "HTML");

    // Create Pipeline Card in KeyCRM
    let keyCrmResult = null;
    if (connectionTest) {
      console.log("🎯 Creating pipeline card in KeyCRM for Anketa...");
      keyCrmResult = await keyCrm.createPipelineCard({
        name: formData["your-name"],
        phone: formData.phone,
        email: "", // Simplified form doesn't have email field
        building_type: formData.building_type,
        design: formData.design,
        timing: formData.timing,
        housing_type: formData.housing_type,
        ...trackingParams,
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

    if (!telegramResult.success) {
      console.error("❌ All Telegram sends failed");
      throw new Error("Failed to send message to any Telegram users");
    }
    console.log("✅ Telegram message sent successfully");

    return NextResponse.json({
      message: "Anketa form processed successfully!",
      telegram: "success",
      telegram_results: telegramResult.results,
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
