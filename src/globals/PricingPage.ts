import type { GlobalConfig } from "payload";

export const PricingPage: GlobalConfig = {
  slug: "pricingPage",
  label: {
    en: "Prices Page",
    uk: "Сторінка «Ціни»",
  },
  admin: {
    group: {
      en: "Content",
      uk: "Контент",
    },
  },
  fields: [
    {
      name: "sectionTitle",
      type: "text",
      required: true,
      defaultValue: "Ціни на послуги Hub Remontu",
      label: {
        en: "Section Title",
        uk: "Заголовок секції",
      },
    },
    {
      name: "sectionSubtitle",
      type: "textarea",
      required: true,
      defaultValue:
        "Два напрямки роботи — своя команда та свій підхід до вартості в кожному.",
      label: {
        en: "Section Subtitle",
        uk: "Підзаголовок секції",
      },
    },
    {
      name: "plans",
      type: "array",
      label: {
        en: "Department Pricing Plans",
        uk: "Тарифи за напрямками",
      },
      minRows: 1,
      defaultValue: [
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
      fields: [
        {
          name: "department",
          type: "select",
          required: true,
          label: {
            en: "Department",
            uk: "Напрямок",
          },
          options: [
            { label: { en: "Hub Architects", uk: "Hub Architects" }, value: "architects" },
            { label: { en: "Hub Builds", uk: "Hub Builds" }, value: "builds" },
          ],
        },
        {
          name: "price",
          type: "text",
          required: true,
          label: {
            en: "Price",
            uk: "Ціна",
          },
          admin: {
            placeholder: "від 1000 $/м²",
          },
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: {
            en: "Description",
            uk: "Опис",
          },
        },
        {
          name: "features",
          type: "array",
          label: {
            en: "Features",
            uk: "Особливості",
          },
          fields: [
            {
              name: "feature",
              type: "text",
              required: true,
              label: {
                en: "Feature",
                uk: "Особливість",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default PricingPage;
