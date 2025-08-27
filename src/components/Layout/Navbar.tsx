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
              <Link
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
              </Link>
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
                Заповніть анкету для консультації
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
              {/*<Accordion allowZeroExpanded>*/}
                <Link
                  className={`nav-link ${
                    currentRoute === "/" ? "active" : ""
                  }`}
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
                  Заповніть анкету для консультаціїу
                </Link>
              {/*</Accordion>*/}
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
