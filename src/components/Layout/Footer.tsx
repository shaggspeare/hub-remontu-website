"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import whiteLogo from "../../../public/images/logo_en.svg";
import ContactInfo from "@/components/ContactUs/ContactInfo";

// Social Links
const socialLinksData = [
  {
    id: "1",
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61555825405999",
  },
  {
    id: "2",
    name: "Instagram",
    link: "https://www.instagram.com/hub_remontu",
  },
  {
    id: "3",
    name: "Telegram",
    link: "https://t.me/Hub_remontu",
  },
];

// Page Links
const pageLinksData = [
  {
    id: "1",
    name: "Портфоліо",
    link: "/portfolio",
  },
  {
    id: "2",
    name: "Про компанію",
    link: "/about-us",
  },
  {
    id: "3",
    name: "Заповнити анкету",
    link: "/request-quote",
  },
  {
    id: "4",
    name: "Наша команда",
    link: "/team",
  },
  {
    id: "5",
    name: "FAQ",
    link: "/faq",
  },
  {
    id: "6",
    name: "Контакти",
    link: "/contact-us",
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <Link href="/">
                    <Image
                      src={whiteLogo}
                      alt="image"
                      width={113}
                      height={54}
                    />
                  </Link>
                </div>
                <p>Створюємо унікальні інтер’єри від ідеї до реалізації.</p>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>МИ В СОЦМЕРЕЖАХ</h3>

                {socialLinksData && (
                  <ul className="social-link">
                    {socialLinksData &&
                      socialLinksData.map((value, i) => (
                        <li key={i}>
                          <Link href={value.link} target="_blank" rel="noopener noreferrer">
                            <i className="ri-arrow-right-line"></i> {value.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>МАПА САЙТУ</h3>

                {pageLinksData && (
                  <ul className="quick-link">
                    {pageLinksData &&
                      pageLinksData.map((value, i) => (
                        <li key={i}>
                          <Link href={value.link}>{value.name}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3 style={{paddingLeft: '30px'}}>НАШІ КОНТАКТИ</h3>

                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>
              © <span>HUB REMONTU</span> - Всі права захищені
              <Link href="https://hubremontu.ua/" target="_blank" rel="noopener noreferrer">
                {" "}
                HUB REMONTU
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
