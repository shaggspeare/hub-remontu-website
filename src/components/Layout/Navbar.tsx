"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "/public/images/logo_en.svg";
import blackLogo from "/public/images/logo_en_black.svg";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  const [menu] = useState<boolean>(true);

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  }, []);

  const classOne: string = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo: string = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // SearchModal
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  // Mobile Menu
  const [isMobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  const handleToggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid position-relative">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="HUB Logo" width={80} height={54} />
          </Link>

          {/* Toggle navigation */}
          <button
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMobileMenu}
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          {/* Menu For Desktop Device */}
          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <a
                style={{
                  marginRight: "10px",
                  backgroundColor: "transparent",
                  border: "1px solid var(--primaryColor)",
                  padding: "10px",
                  color: "white",
                  lineHeight: "32px",
                }}
                href="tel:380683833838"
              >
                +38(068) 383 38 38
              </a>
              <li className="nav-item">
                <Link
                  className={`nav-link ${currentRoute === "/" ? "active" : ""}`}
                  href="/"
                >
                  Головна
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about-us/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                >
                  Про нас
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/portfolio/"
                  className={`nav-link ${
                    currentRoute === "/portfolio/" ? "active" : ""
                  }`}
                >
                  Портфоліо
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/team/"
                  className={`nav-link ${
                    currentRoute === "/team/" ? "active" : ""
                  }`}
                >
                  Команда
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/faq/"
                  className={`nav-link ${
                    currentRoute === "/faq/" ? "active" : ""
                  }`}
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact-us/"
                  className={`nav-link ${
                    currentRoute === "/contact-us/" ? "active" : ""
                  }`}
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* others-options */}
          <div className="others-option d-flex align-items-center">
            {/*<div className="option-item">*/}
            {/*  <div className="search-btn" onClick={handleToggleSearchModal}>*/}
            {/*    <i className="ri-search-line"></i>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="option-item">
              <Link href="/request-quote" className="default-btn">
                Заповнити анкету
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu For Mobile Device */}
      <div
        className={`modal mobile-menu-modal ${
          isMobileMenuActive ? "show" : ""
        }`}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between">
              <div>
                <Image
                  src={blackLogo}
                  alt="Hub remontu Logo"
                  width={100}
                  height={41}
                />
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleToggleMobileMenu}
              >
                <i className="ri-close-line mobile-header-icon"></i>
              </button>
            </div>

            <div className="modal-body">
              <Link
                className={`nav-link ${currentRoute === "/" ? "active" : ""}`}
                href="/"
              >
                Головна
              </Link>

              <Link
                href="/about-us/"
                className={`nav-link ${
                  currentRoute === "/about-us/" ? "active" : ""
                }`}
              >
                Про нас
              </Link>
              <Link
                href="/team/"
                className={`nav-link ${
                  currentRoute === "/team/" ? "active" : ""
                }`}
              >
                Команда
              </Link>
              <Link
                href="/portfolio/"
                className={`nav-link ${
                  currentRoute === "/portfolio/" ? "active" : ""
                }`}
              >
                Портфоліо
              </Link>

              {/*<Link*/}
              {/*  href="/portfolio-details/"*/}
              {/*  className={`nav-link ${*/}
              {/*    currentRoute === "/portfolio-details/"*/}
              {/*      ? "active"*/}
              {/*      : ""*/}
              {/*  }`}*/}
              {/*>*/}
              {/*  Portfolio Details*/}
              {/*</Link>*/}

              {/*<AccordionItem uuid="b">*/}
              {/*  <AccordionItemHeading>*/}
              {/*    <AccordionItemButton>Portfolio</AccordionItemButton>*/}
              {/*  </AccordionItemHeading>*/}
              {/*  */}
              {/*  */}

              {/*  <AccordionItemPanel>*/}
              {/*    <ul className="menu-list">*/}
              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/portfolio/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/portfolio/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Portfolio Style 01*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/portfolio-2/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/portfolio-2/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Portfolio Style 02*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/portfolio-details/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/portfolio-details/"*/}
              {/*              ? "active"*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Portfolio Details*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </AccordionItemPanel>*/}
              {/*</AccordionItem>*/}

              {/*<AccordionItem uuid="c">*/}
              {/*  <AccordionItemHeading>*/}
              {/*    <AccordionItemButton>Pages</AccordionItemButton>*/}
              {/*  </AccordionItemHeading>*/}

              {/*  <AccordionItemPanel>*/}
              {/*    <ul className="menu-list">*/}
              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/services/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/services/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Services*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/services/service-details/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/services/service-details/"*/}
              {/*              ? "active"*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Services Details*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/pricing/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/pricing/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Pricing*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/team/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/team/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Team*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/gallery/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/gallery/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Gallery*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/faq/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/faq/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          FAQs*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/testimonials/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/testimonials/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Testimonials*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/login/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/login/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Login*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/register/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/register/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Register*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/privacy-policy/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/privacy-policy/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Privacy Policy*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/terms-conditions/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/terms-conditions/"*/}
              {/*              ? "active"*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Terms & Conditions*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/request-quote/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/request-quote/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Request A Quote*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </AccordionItemPanel>*/}
              {/*</AccordionItem>*/}

              {/*<AccordionItem uuid="d">*/}
              {/*  <AccordionItemHeading>*/}
              {/*    <AccordionItemButton>Blog</AccordionItemButton>*/}
              {/*  </AccordionItemHeading>*/}

              {/*  <AccordionItemPanel>*/}
              {/*    <ul className="menu-list">*/}
              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/blog/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/blog/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Blog Grid*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/blog-right-sidebar/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/blog-right-sidebar/"*/}
              {/*              ? "active"*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Right Sidebar*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/blog-left-sidebar/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/blog-left-sidebar/"*/}
              {/*              ? "active"*/}
              {/*              : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Left Sidebar*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/single-blog/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/single-blog/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Single Blog*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/author/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/author/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Author*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/categories/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/categories/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Categories*/}
              {/*        </Link>*/}
              {/*      </li>*/}

              {/*      <li>*/}
              {/*        <Link*/}
              {/*          href="/tags/"*/}
              {/*          className={`nav-link ${*/}
              {/*            currentRoute === "/tags/" ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          Tags*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </AccordionItemPanel>*/}
              {/*</AccordionItem>*/}

              <Link
                href="/contact-us/"
                className={`nav-link ${
                  currentRoute === "/contact-us/" ? "active" : ""
                }`}
              >
                Контакти
              </Link>
              <Link
                href="/request-quote/"
                className={`nav-link ${
                  currentRoute === "/request-quote/" ? "active" : ""
                }`}
              >
                Заповнити анкету
              </Link>
            </div>
          </div>
        </div>

        <div className="close-overlay" onClick={handleToggleMobileMenu}></div>
      </div>

      {/* Search Form */}
      <div className={`modal search-modal-area ${isActive ? "show" : ""}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleToggleSearchModal}
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="modal-body">
              <div className="search-form">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                  />
                  <button type="submit">
                    <i className="ri-search-line"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="close-overlay" onClick={handleToggleSearchModal}></div>
      </div>
    </>
  );
};

export default Navbar;
