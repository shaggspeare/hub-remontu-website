"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import ContactInfo from "./ContactInfo";
import Image from "next/image";

import contactImg from "../../../public/images/contact/contact.png";
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here.
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-5 col-md-12 pe-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="contact-image">
                <Image src={contactImg} alt="contact" width={700} height={1012} />
              </div>
            </div>

            <div className="col-lg-7 col-md-12 ps-5">
              <div 
                className="contact-form-wrap"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="title">
                  <h2>
                    <span>Contact,</span> Let&apos;s Talk
                  </h2>
                  <p>
                    Let&apos;s bring your project to life. Let us know how we
                    can best help you. We are a leading architecture firm
                    dedicated to creating designs.
                  </p>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-6">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>
                          YOUR NAME<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Jonathon Ronan"
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          EMAIL ADDRESS<span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="jonathonronana63@gmail.com"
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          PHONE NO<span>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="+0 321 546 2345"
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          YOUR MESSAGE HERE<span>*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Write your message here..."
                        ></textarea>
                      </div>

                      <button type="submit" className="default-btn">
                        Send Message Now
                      </button>
                    </form>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    {/* ContactInfo */}
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
    </>
  );
};

export default ContactForm;
