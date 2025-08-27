"use client";

import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import shape from "../../../public/images/contact/shape.png";
import { useRouter } from "next/navigation";
import { trackFormSubmission } from "@/utils/gtm";
import { useUtmTracker } from "@/hooks/useUtmTracker";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();
  const { utmParams } = useUtmTracker();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Объединяем данные формы с UTM параметрами
      const submitData = {
        ...formData,
        ...utmParams,
      };

      console.log("Submitting contact form with UTM:", submitData);

      const response = await fetch("/api/sendContactMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      console.log("Contact form response:", result);

      if (response.ok) {
        // Track successful form submission
        trackFormSubmission("contact_form", true);

        // Push conversion event to dataLayer
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "form_submission_success",
            form_name: "contact_form",
            user_name: formData.name,
            user_phone: formData.phone,
            keycrm_status: result.keycrm || "unknown",
            keycrm_id: result.keycrm_id || null,
            ...utmParams,
          });
        }

        setFormData({ name: "", phone: "", message: "" });

        // Small delay to ensure GTM events are processed
        setTimeout(() => {
          router.push("/thank-you");
        }, 100);
      } else {
        trackFormSubmission("contact_form", false);
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      trackFormSubmission("contact_form", false);
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-100">
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title-wrap">
            <span>КОНТАКТИ</span>
            <h2 style={{ color: "var(--whiteColor)" }}>
              Найкращий час познайомитись - вже зараз!
            </h2>
          </div>
          <div className="row justify-content-center contact-block">
            <div
              ref={(el) => {
                if (el) fadeRefs.current.push(el);
              }}
              className="col-lg-5 col-md-12 pe-5 fade-up"
            >
              <div className="contact-image">
                <Image
                  src="/images/new-images/past-projects/3k_sanfran-min.png"
                  alt="contact"
                  width={700}
                  height={1012}
                />
              </div>
            </div>

            <div
              ref={(el) => {
                if (el) fadeRefs.current.push(el);
              }}
              className="col-lg-7 col-md-12 ps-5 fade-up"
            >
              <div className="contact-form-wrap">
                <div className="title">
                  <h2>
                    <span>Зв`язатись</span> з нами
                  </h2>
                  <p>
                    Разом з нами Ваш проєкт стане реальністю, а процес ремонту
                    перетвориться на приємне та комфортне втілення усіх
                    побажань.
                  </p>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-6">
                    {/* Показываем UTM параметры в development режиме */}
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
                          <pre
                            style={{ fontSize: "11px", margin: "5px 0 0 0" }}
                          >
                            {JSON.stringify(utmParams, null, 2)}
                          </pre>
                        </div>
                      )}

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>
                          ВАШЕ ІМ`Я<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Ваше ім'я"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          ТЕЛЕФОН<span>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="+380 00 000 00 00"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>ВАШ КОМЕНТАР</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Напишіть ваш коментар..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="default-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Надсилання..." : "Надіслати"}
                      </button>
                    </form>
                  </div>

                  <div
                    ref={(el) => {
                      if (el) fadeRefs.current.push(el);
                    }}
                    className="col-lg-5 col-md-6 fade-up"
                  >
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-shape1">
          <Image src={shape} alt="image" width={116} height={82} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.6s ease-out,
            transform 0.6s ease-out;
        }

        .fade-up-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
