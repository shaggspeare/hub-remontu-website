"use client";

import React from "react";
import Link from "next/link";
import { DEPARTMENTS } from "@/constants/business";

type DepartmentPlan = {
  department: keyof typeof DEPARTMENTS;
  price: string;
  description: string;
  features: string[];
};

const plans: DepartmentPlan[] = [
  {
    department: "architects",
    price: "Індивідуальний розрахунок",
    description:
      "Дизайн-проєкти для квартир, будинків та комерційних приміщень — з технічною документацією та 3D-візуалізаціями.",
    features: [
      "Вартість залежить від площі та обсягу документації",
      "Розрахунок після безкоштовної консультації",
      "3D-візуалізації та повна технічна документація",
      "Авторський супровід реалізації проєкту",
    ],
  },
  {
    department: "builds",
    price: "від 1000 $/м²",
    description:
      "Ремонт квартир, будинків, офісів та комерційних приміщень під ключ власною командою — без субпідрядників.",
    features: [
      "Фіксована ціна в договорі",
      "Поетапна оплата за фактом виконаних робіт",
      "Гарантія на всі виконані роботи",
      "Авторський нагляд на кожному етапі",
    ],
  },
];

const DepartmentPricing: React.FC = () => {
  return (
    <div className="pt-100 pb-75">
      <div className="container">
        <div className="section-title-wrap p-0" style={{ maxWidth: "600px" }}>
          <h2 className="mb-2">Ціни на послуги Hub Remontu</h2>
          <p>
            Два напрямки роботи — своя команда та свій підхід до вартості в
            кожному.
          </p>
        </div>

        <div className="row justify-content-center">
          {plans.map((plan) => {
            const dept = DEPARTMENTS[plan.department];
            return (
              <div className="col-lg-5" key={plan.department}>
                <div className="pricing-plan">
                  <h4>{dept.name}</h4>
                  <p>{dept.tagline}</p>
                  <p>{plan.description}</p>
                  <h2>{plan.price}</h2>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i className="ri-check-line"></i> {feature}
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
