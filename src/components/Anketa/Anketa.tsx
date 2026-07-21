"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

import { useRouter } from "next/navigation";
import { trackFormSubmission } from "@/utils/gtm";
import { useUtmTracker } from "@/hooks/useUtmTracker";

interface FormValues {
  "your-name": string;
  phone: string;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const MultiPartForm: React.FC = () => {
  const router = useRouter();
  const { utmParams } = useUtmTracker();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    "your-name": "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormValues;

    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const isFormValid = () =>
    formValues["your-name"].length > 0 && formValues.phone.length > 0;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = {
        formData: formValues,
        ...utmParams,
      };

      const response = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok) {
        trackFormSubmission("anketa_form", true);

        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "anketa_form_submission_success",
            form_name: "anketa_form",
            user_name: formValues["your-name"],
            user_phone: formValues.phone,
            keycrm_status: result.keycrm || "unknown",
            keycrm_id: result.keycrm_id || null,
            ...utmParams,
          });
        }

        setFormValues({ "your-name": "", phone: "" });

        setTimeout(() => {
          router.push("/thank-you");
        }, 100);
      } else {
        trackFormSubmission("anketa_form", false);
        alert("Помилка при відправці форми");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      trackFormSubmission("anketa_form", false);
      alert("Помилка при відправці форми");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      {process.env.NODE_ENV === "development" &&
        Object.keys(utmParams).length > 0 && (
          <div
            style={{
              marginBottom: "20px",
              padding: "10px",
              backgroundColor: "rgba(186, 141, 109, 0.1)",
              border: "1px solid var(--primaryColor)",
              borderRadius: "5px",
              fontSize: "12px",
              color: "var(--whiteColor)",
            }}
          >
            <strong>UTM параметри:</strong>
            <pre style={{ fontSize: "11px", margin: "5px 0 0 0" }}>
              {JSON.stringify(utmParams, null, 2)}
            </pre>
          </div>
        )}

      <form onSubmit={handleSubmit} className="wpcf7-form">
        <div className="step-container">
          <div className="form-step">
            <h3 className="step-title">Ваше ім&#39;я:</h3>
            <input
              className="input-field"
              required
              placeholder="Введіть ваше ім'я"
              value={formValues["your-name"]}
              type="text"
              name="your-name"
              onChange={handleChange}
            />

            <h3 className="step-title" style={{ marginTop: "24px" }}>
              Ваш номер телефону:
            </h3>
            <input
              className="input-field"
              required
              placeholder="+ 380 __ ___ __ __"
              value={formValues.phone}
              type="tel"
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            type="submit"
            className="submit-button"
            disabled={!isFormValid() || isSubmitting}
          >
            {isSubmitting ? "Відправляємо..." : "Відправити форму"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiPartForm;
