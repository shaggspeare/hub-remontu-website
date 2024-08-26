"use client";

import React from "react"; 

const NewsletterForm: React.FC = () => {
  return (
    <>
      <div className="single-footer-widget">
        <h3>SUBSCRIBE NEWSLETTER</h3>

        <form className="newsletter-form">
          <input
            type="text"
            className="input-newsletter"
            placeholder="Your Email Here"
          />

          <button type="submit">
            <i className="ri-arrow-right-line"></i>SUBSCRIBE NEWSLETTER
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsletterForm;
