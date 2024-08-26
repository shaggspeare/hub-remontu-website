"use client";

import React from "react";

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/",
  },
  {
    id: "3",
    icon: "ri-twitter-line",
    link: "https://www.twitter.com/",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <>
      <ul className="contact-info-list">
        <li>
          <span>ADDRESS</span>
          123 Maple Street Toronto, Ontario M1A 1A1 Canada
        </li>

        <li>
          <span>CONTACT</span>
          <a href="mailto:helltraz@gmail.com">helltraz@gmail.com</a>
          <a href="tel:15551234567">+1 555-123-4567</a>
        </li>

        <li>
          <span>SOCIAL MEDIA</span>

          {socialLinksData && (
            <ul className="social">
              {socialLinksData &&
                socialLinksData.map((value, i) => (
                  <li key={i}>
                    <a href={value.link} target="_blank">
                      <i className={value.icon}></i>
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
