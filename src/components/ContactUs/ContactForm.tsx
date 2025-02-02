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

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      const response = await fetch("/api/sendContactMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
            <h1 style={{color: 'var(--whiteColor)'}}>Найкращий час познайомитись - вже зараз!</h1>
          </div>
          <div className="row justify-content-center">
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
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          EMAIL<span>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="ваш_мейл@gmail.com"
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
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          ВАШ КОМЕНТАР<span>*</span>
                        </label>
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
                    <ContactInfo/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-shape1">
          <Image src={shape} alt="image" width={116} height={82}/>
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
