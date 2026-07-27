"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DEPARTMENTS, DepartmentSlug } from "@/constants/business";
import { PROJECT_BRAND_LOGOS } from "@/utils/projectBrand";

type Card = {
  slug: string;
  icon: string;
  title: string;
  text: string;
  aosDelay: string;
  category: "living" | "commercial";
  type: "design" | "implementation";
};

function portfolioLink(card: Card): string {
  const params = new URLSearchParams({
    category: card.category,
    type: card.type,
  });
  return `/portfolio/?${params.toString()}`;
}

const DEPARTMENT_LOGOS: Record<DepartmentSlug, { src: string; alt: string }> = {
  builds: PROJECT_BRAND_LOGOS.implementation,
  architects: PROJECT_BRAND_LOGOS.design,
};

const cardsByDepartment: Record<DepartmentSlug, Card[]> = {
  builds: [
    {
      slug: "remont-kvartyr-pid-kliuch",
      icon: "flaticon-mansory",
      title: "Ремонт квартир",
      text: "Ремонт квартир під ключ власною командою — від чорнових робіт до фінального оздоблення. Фіксована ціна в договорі.",
      aosDelay: "100",
      category: "living",
      type: "implementation",
    },
    {
      slug: "remont-budynkiv-ta-kotedzhiv",
      icon: "flaticon-modern-house",
      title: "Ремонт будинків",
      text: "Ремонт будинків, котеджів і таунхаусів у Києві та області. Авторський нагляд і прозора звітність на кожному етапі.",
      aosDelay: "200",
      category: "living",
      type: "implementation",
    },
    {
      slug: "remont-ofisiv-ta-komertsii",
      icon: "flaticon-skyscraper",
      title: "Ремонт комерції",
      text: "Ремонт офісів, ресторанів, клінік і магазинів під ключ. Мінімізуємо простій бізнесу, дотримуємось термінів.",
      aosDelay: "300",
      category: "commercial",
      type: "implementation",
    },
  ],
  architects: [
    {
      slug: "dyzajn-interieru",
      icon: "flaticon-interior-design",
      title: "Дизайн інтер'єру",
      text: "Унікальний дизайн-проєкт вашої квартири чи будинку — практичний і продуманий до дрібниць.",
      aosDelay: "100",
      category: "living",
      type: "design",
    },
    {
      slug: "dyzajn-komertsii",
      icon: "flaticon-real-estate",
      title: "Дизайн комерції",
      text: "Дизайн офісів, ресторанів, клінік і магазинів. 3D-візуалізації та повна технічна документація.",
      aosDelay: "200",
      category: "commercial",
      type: "design",
    },
  ],
};

const departmentCta: Record<DepartmentSlug, string> = {
  builds: "/posluhy/remont-kvartyr-pid-kliuch/",
  architects: "/posluhy/dyzajn-interieru/",
};

const DEPARTMENT_BADGE_SIZE = 48;

const DepartmentBadge: React.FC<{ dept: DepartmentSlug }> = ({ dept }) => {
  const logo = DEPARTMENT_LOGOS[dept];
  return (
    <div
      style={{
        width: DEPARTMENT_BADGE_SIZE,
        height: DEPARTMENT_BADGE_SIZE,
        borderRadius: "50%",
        background: "rgba(0, 0, 0, 0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={Math.round(DEPARTMENT_BADGE_SIZE * 0.64)}
        height={Math.round(DEPARTMENT_BADGE_SIZE * 0.64)}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

const WhatWeDo: React.FC = () => {
  return (
    <div className="services-area pb-75">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h2>
            Що <span>ми робимо</span> для Вас
          </h2>
        </div>

        {Object.values(DEPARTMENTS).map((dept) => {
          const deptSlug = dept.slug as DepartmentSlug;

          return (
            <div
              key={dept.slug}
              className="services-group"
              style={{ marginBottom: "20px" }}
            >
              <div
                className="d-flex flex-wrap justify-content-between align-items-center"
                style={{ marginBottom: "24px", gap: "12px" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "14px" }}
                >
                  <DepartmentBadge dept={deptSlug} />
                  <div>
                    <div style={{ color: "#E1DBD6", fontWeight: 600 }}>
                      {dept.name}
                    </div>
                    <div style={{ color: "#9D9A97", fontSize: "14px" }}>
                      {dept.tagline}
                    </div>
                  </div>
                </div>

                <Link
                  href={departmentCta[deptSlug]}
                  style={{
                    color: "#9D9A97",
                    fontWeight: 500,
                    fontSize: "15px",
                    letterSpacing: "1.5px",
                  }}
                >
                  ПОСЛУГИ {dept.name.toUpperCase()} →
                </Link>
              </div>

              <div className="row g-0">
                {cardsByDepartment[deptSlug].map((card) => (
                  <div
                    className="col-lg-4 col-md-6 d-flex"
                    data-aos="fade-up"
                    data-aos-delay={card.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="true"
                    key={card.slug}
                  >
                    <div
                      className="services-card"
                      style={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div className="icon">
                        <i className={card.icon}></i>
                      </div>
                      <h3 style={{ color: "#E1DBD6" }}>{card.title}</h3>
                      <p style={{ flexGrow: 1 }}>{card.text}</p>
                      <Link
                        href={portfolioLink(card)}
                        className="services-btn"
                        style={{ color: "var(--primaryColor)" }}
                      >
                        Детальніше →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
