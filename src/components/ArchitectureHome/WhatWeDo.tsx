import React from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@payload-config";
import { getPayload } from "payload";
import { DEPARTMENTS, DepartmentSlug } from "@/constants/business";
import { PROJECT_BRAND_LOGOS } from "@/utils/projectBrand";
import type { WhatWeDoItem } from "@/payload-types";

type Card = {
  id: string;
  icon: string;
  title: string;
  text: string;
  category: "living" | "commercial";
  type: "design" | "implementation";
};

// Used only if the CMS collection is unreachable or empty.
const FALLBACK_ITEMS: Card[] = [
  {
    id: "remont-kvartyr",
    icon: "flaticon-mansory",
    title: "Ремонт квартир",
    text: "Ремонт квартир під ключ власною командою — від чорнових робіт до фінального оздоблення. Фіксована ціна в договорі.",
    category: "living",
    type: "implementation",
  },
  {
    id: "remont-budynkiv",
    icon: "flaticon-modern-house",
    title: "Ремонт будинків",
    text: "Ремонт будинків, котеджів і таунхаусів у Києві та області. Авторський нагляд і прозора звітність на кожному етапі.",
    category: "living",
    type: "implementation",
  },
  {
    id: "remont-komertsii",
    icon: "flaticon-skyscraper",
    title: "Ремонт комерції",
    text: "Ремонт офісів, ресторанів, клінік і магазинів під ключ. Мінімізуємо простій бізнесу, дотримуємось термінів.",
    category: "commercial",
    type: "implementation",
  },
];
const FALLBACK_ITEMS_BY_DEPARTMENT: Record<DepartmentSlug, Card[]> = {
  builds: FALLBACK_ITEMS,
  architects: [
    {
      id: "dyzajn-interieru",
      icon: "flaticon-interior-design",
      title: "Дизайн інтер'єру",
      text: "Унікальний дизайн-проєкт вашої квартири чи будинку — практичний і продуманий до дрібниць.",
      category: "living",
      type: "design",
    },
    {
      id: "dyzajn-komertsii",
      icon: "flaticon-real-estate",
      title: "Дизайн комерції",
      text: "Дизайн офісів, ресторанів, клінік і магазинів. 3D-візуалізації та повна технічна документація.",
      category: "commercial",
      type: "design",
    },
  ],
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

const WhatWeDo: React.FC = async () => {
  let items: WhatWeDoItem[] = [];
  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "what-we-do-items",
      sort: "order",
      limit: 100,
    });
    items = docs;
  } catch {
    items = [];
  }

  const cardsByDepartment: Record<DepartmentSlug, Card[]> =
    items.length > 0
      ? {
          builds: items
            .filter((item) => item.department === "builds")
            .map((item) => ({
              id: item.id,
              icon: item.icon,
              title: item.title,
              text: item.text,
              category: item.category,
              type: item.type,
            })),
          architects: items
            .filter((item) => item.department === "architects")
            .map((item) => ({
              id: item.id,
              icon: item.icon,
              title: item.title,
              text: item.text,
              category: item.category,
              type: item.type,
            })),
        }
      : FALLBACK_ITEMS_BY_DEPARTMENT;

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
          const cards = cardsByDepartment[deptSlug];
          if (cards.length === 0) return null;

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
                {cards.map((card, i) => (
                  <div
                    className="col-lg-4 col-md-6 d-flex"
                    data-aos="fade-up"
                    data-aos-delay={String((i % 3) * 100 + 100)}
                    data-aos-duration="600"
                    data-aos-once="true"
                    key={card.id}
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
