"use client";

import React from "react";
import ContactInfo from "../ContactUs/ContactInfo";
import Image from "next/image";

import contactImg from "../../../public/images/contact/contact2.png";

const RequestAQuoteForm: React.FC = () => {
  return (
    <>
      <div className="contact-area bg-white-wrap ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 pe-5">
              <div className="contact-image">
                <Image src={contactImg} alt="contact" width={700} height={1012} />
              </div>
            </div>

            <div className="col-lg-7 col-md-12 ps-5 position-relative">
              <div className="contact-form-wrap">
                <div className="title">
                  <span>QUOTE</span>
                  <h2>Request A Quote Now For Your Next Project</h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-7 col-md-6">
                    <form>
                      <div className="form-group">
                        <label>
                          YOUR NAME<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          EMAIL ADDRESS<span>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          PHONE NO<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+0 321 546 2345"
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          CHOOSE PROJECT CATEGORY<span>*</span>
                        </label>

                        <select className="form-select form-control">
                          <option value="0">Interior Design</option>
                          <option value="1">Urban Design</option>
                          <option value="2">Architecture</option>
                          <option value="3">Interior Design</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>
                          CHOOSE PROJECT LOCATION<span>*</span>
                        </label>

                        <select className="form-select form-control">
                          <option value="0">Montreal</option>
                          <option value="1">Exterior</option>
                          <option value="2">Industrial</option>
                          <option value="3">3D Modelling</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>
                          YOUR MESSAGE HERE<span>*</span>
                        </label>
                        <textarea
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
      </div>
    </>
  );
};

export default RequestAQuoteForm;
