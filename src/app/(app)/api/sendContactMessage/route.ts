// src/app/(app)/api/sendContactMessage/route.ts - FINAL CORRECT VERSION
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

      // Determine source_id based on UTM parameters
      let source_id = 1; // Default - website

      if (leadData.utm_medium === "cpc") {
        source_id = 2; // Contextual advertising
      } else if (leadData.utm_medium === "social") {
        source_id = 3; // Targeted advertising
      }

      // Generate a unique title for the card (you can customize this)
      const cardTitle = `Contact Form #${Date.now()}`;

      // Correct payload structure based on KeyCRM documentation
      const payload = {
        title: cardTitle,
        source_id: source_id,
        manager_comment: leadData.message || "Contact form submission",
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
            uuid: "contact_form_type",
            value: "website_contact",
          },
        ],
      };

      console.log("Sending to KeyCRM Pipeline Cards:", payload);
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
  const { name, phone, message, ...utmParams } = requestData;

  console.log("Received request data:", requestData);

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

    // Prepare Telegram message
    const telegramMessage = `
*Нове Заповнення Форми Контакту*
======================
👤 *Ім'я*: ${name}
📞 *Телефон*: ${phone}
💬 *Коментар*: ${message}

📊 *UTM Дані*:
${utmParams.utm_source ? `🔗 Джерело: ${utmParams.utm_source}` : ""}
${utmParams.utm_medium ? `📱 Канал: ${utmParams.utm_medium}` : ""}
${utmParams.utm_campaign ? `🎯 Кампанія: ${utmParams.utm_campaign}` : ""}
${utmParams.utm_content ? `📄 Контент: ${utmParams.utm_content}` : ""}
${utmParams.utm_term ? `🔍 Термін: ${utmParams.utm_term}` : ""}
`;

    // Send to Telegram
    console.log("📱 Sending to Telegram...");
    const telegramResponse = await fetch(TELEGRAM_API, {
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

    // Create Pipeline Card in KeyCRM
    let keyCrmResult = null;
    if (connectionTest) {
      console.log("🎯 Creating pipeline card in KeyCRM...");
      keyCrmResult = await keyCrm.createPipelineCard({
        name,
        phone,
        email: "", // Contact form doesn't have email field
        message,
        ...utmParams,
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
      console.error("❌ Telegram send failed");
      throw new Error("Failed to send message to Telegram");
    }
    console.log("✅ Telegram message sent successfully");

    return NextResponse.json({
      message: "Message sent successfully!",
      telegram: "success",
      keycrm: keyCrmResult ? "success" : "failed",
      keycrm_id: keyCrmResult?.id || null,
      keycrm_contact_id: keyCrmResult?.contact_id || null,
      keycrm_type: "pipeline_card", // Indicating we used pipeline cards endpoint
    });
  } catch (error) {
    console.error("❌ Error processing form:", error);
    return NextResponse.json(
      { error: "Error processing form submission" },
      { status: 500 },
    );
  }
}
