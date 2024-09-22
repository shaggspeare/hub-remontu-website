"use client";

import React from "react";

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/profile.php?id=61555825405999",
  },
  {
    id: "2",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/hub_remontu",
  },
  {
    id: "3",
    icon: "ri-telegram-line",
    link: "https://t.me/HUBremontu",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <>
      <ul className="contact-info-list">
        <li>
          <span>АДРЕСА</span>
          м. Київ, ЖК Great,
          Дніпровська набережна, 15к, приміщення 1
        </li>

        <li>
          <span>CONTACT</span>
          <a href="mailto:hubremontu@gmail.com">hubremontu@gmail.com</a>
          <a href="tel:380683833838">+38 (068) 383 38 38</a>
        </li>

        <li>
          <span>СОЦМЕРЕЖІ</span>

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
