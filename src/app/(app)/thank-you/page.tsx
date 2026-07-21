"use client";

import Link from "next/link";
import { useEffect } from "react";
import "./thank-you.scss";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Push page view to dataLayer for GTM
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_title: "Thank You",
        page_location: window.location.href,
        page_path: "/thank-you",
      });
    }
  }, []);

  return (
    <div className="thank-you-page">
      <div className="container">
        <div className="thank-you-content">
          <h1 className="thank-you-title">
            <span>Дякуємо!</span>
          </h1>

          <p className="thank-you-description">
            Ваша заявка успішно відправлена. Ми зв&#39;яжемося з вами найближчим
            часом. А поки — продовжте спілкування з нами в Telegram-боті.
          </p>

          <div className="thank-you-actions">
            <a
              href="https://t.me/HUB_GROUP_BOT"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-btn"
            >
              <i className="ri-telegram-line"></i>
              Продовжити в Telegram
            </a>
            <Link href="/" className="default-btn">
              Повернутися на головну
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
