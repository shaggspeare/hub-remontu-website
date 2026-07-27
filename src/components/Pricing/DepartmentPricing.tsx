import React from "react";
import Link from "next/link";
import config from "@payload-config";
import { getPayload } from "payload";
import { DEPARTMENTS, DepartmentSlug } from "@/constants/business";
import type { PricingPage } from "@/payload-types";

// Used only if the CMS global is unreachable or not yet configured.
const FALLBACK: PricingPage = {
  id: "fallback",
  sectionTitle: "Ціни на послуги Hub Remontu",
  sectionSubtitle:
    "Два напрямки роботи — своя команда та свій підхід до вартості в кожному.",
  plans: [
    {
      department: "architects",
      price: "Індивідуальний розрахунок",
      description:
        "Дизайн-проєкти для квартир, будинків та комерційних приміщень — з технічною документацією та 3D-візуалізаціями.",
      features: [
        { feature: "Вартість залежить від площі та обсягу документації" },
        { feature: "Розрахунок після безкоштовної консультації" },
        { feature: "3D-візуалізації та повна технічна документація" },
        { feature: "Авторський супровід реалізації проєкту" },
      ],
    },
    {
      department: "builds",
      price: "від 1000 $/м²",
      description:
        "Ремонт квартир, будинків, офісів та комерційних приміщень під ключ власною командою — без субпідрядників.",
      features: [
        { feature: "Фіксована ціна в договорі" },
        { feature: "Поетапна оплата за фактом виконаних робіт" },
        { feature: "Гарантія на всі виконані роботи" },
        { feature: "Авторський нагляд на кожному етапі" },
      ],
    },
  ],
};

const DepartmentPricing: React.FC = async () => {
  let pricing: PricingPage = FALLBACK;
  try {
    const payload = await getPayload({ config });
    const doc = await payload.findGlobal({ slug: "pricingPage" });
    if (doc?.plans?.length) {
      pricing = doc;
    }
  } catch {
    pricing = FALLBACK;
  }

  const plans = pricing.plans ?? FALLBACK.plans ?? [];

  return (
    <div className="pt-100 pb-75">
      <div className="container">
        <div className="section-title-wrap p-0" style={{ maxWidth: "600px" }}>
          <h2 className="mb-2">{pricing.sectionTitle}</h2>
          <p>{pricing.sectionSubtitle}</p>
        </div>

        <div className="row justify-content-center">
          {plans.map((plan) => {
            const dept = DEPARTMENTS[plan.department as DepartmentSlug];
            return (
              <div className="col-lg-5" key={plan.id ?? plan.department}>
                <div className="pricing-plan">
                  <h4>{dept.name}</h4>
                  <p>{dept.tagline}</p>
                  <p>{plan.description}</p>
                  <h2>{plan.price}</h2>

                  <ul>
                    {(plan.features ?? []).map((f, i) => (
                      <li key={f.id ?? i}>
                        <i className="ri-check-line"></i> {f.feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/anketa-form" className="default-btn">
                    Заповнити анкету
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPricing;
