import type { CollectionConfig } from "payload";

export const WhatWeDoItems: CollectionConfig = {
  slug: "what-we-do-items",
  labels: {
    singular: {
      en: "\"What We Do\" Card",
      uk: "Картка «Що ми робимо»",
    },
    plural: {
      en: "\"What We Do\" Cards",
      uk: "Картки «Що ми робимо»",
    },
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "department", "category", "type", "order"],
    description: {
      en: "Service highlight cards shown in the homepage \"What we do for you\" section, grouped by department.",
      uk: "Картки послуг у секції «Що ми робимо для Вас» на головній сторінці, згруповані за напрямком.",
    },
    group: {
      en: "Content",
      uk: "Контент",
    },
  },
  defaultSort: "order",
  fields: [
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: {
        en: "Display Order",
        uk: "Порядок відображення",
      },
      admin: {
        position: "sidebar",
        description: {
          en: "Lower numbers appear first within the department group.",
          uk: "Менші числа з'являються першими у групі напрямку.",
        },
      },
    },
    {
      name: "department",
      type: "select",
      required: true,
      label: {
        en: "Department",
        uk: "Напрямок",
      },
      options: [
        { label: { en: "Hub Architects (design)", uk: "Hub Architects (дизайн)" }, value: "architects" },
        { label: { en: "Hub Builds (renovation & construction)", uk: "Hub Builds (ремонт та будівництво)" }, value: "builds" },
      ],
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: {
        en: "Title",
        uk: "Заголовок",
      },
    },
    {
      name: "text",
      type: "textarea",
      required: true,
      label: {
        en: "Description",
        uk: "Опис",
      },
    },
    {
      name: "icon",
      type: "text",
      required: true,
      label: {
        en: "Icon class",
        uk: "Клас іконки",
      },
      admin: {
        placeholder: "flaticon-mansory",
        description: {
          en: "Flaticon icon class from the theme icon font.",
          uk: "Клас іконки Flaticon з іконкового шрифту теми.",
        },
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      label: {
        en: "Portfolio category filter",
        uk: "Фільтр категорії портфоліо",
      },
      options: [
        { label: { en: "Living", uk: "Житлова" }, value: "living" },
        { label: { en: "Commercial", uk: "Комерційна" }, value: "commercial" },
      ],
      admin: {
        description: {
          en: "Used to build the \"Детальніше\" link to the filtered portfolio page.",
          uk: "Використовується для формування посилання «Детальніше» на відфільтроване портфоліо.",
        },
      },
    },
    {
      name: "type",
      type: "select",
      required: true,
      label: {
        en: "Portfolio type filter",
        uk: "Фільтр типу портфоліо",
      },
      options: [
        { label: "Дизайн-проєкт", value: "design" },
        { label: "Реалізація", value: "implementation" },
      ],
      admin: {
        description: {
          en: "Used to build the \"Детальніше\" link to the filtered portfolio page.",
          uk: "Використовується для формування посилання «Детальніше» на відфільтроване портфоліо.",
        },
      },
    },
  ],
};

export default WhatWeDoItems;
