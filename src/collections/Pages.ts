import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: {
      en: "Page",
      uk: "Сторінка",
      ru: "Страница",
    },
    plural: {
      en: "Pages",
      uk: "Сторінки",
      ru: "Страницы",
    },
  },

  admin: {
    useAsTitle: "title",
    group: {
      en: "Content",
      uk: "Контент",
      ru: "Контент",
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: {
        en: "Page Title",
        uk: "Заголовок сторінки",
        ru: "Заголовок страницы",
      },
      admin: {
        placeholder: {
          en: "Enter page title",
          uk: "Введіть заголовок сторінки",
          ru: "Введите заголовок страницы",
        },
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      required: true,
      label: {
        en: "Meta Description",
        uk: "Мета-опис",
        ru: "Мета-описание",
      },
      admin: {
        placeholder: {
          en: "Enter meta description",
          uk: "Введіть мета-опис",
          ru: "Введите мета-описание",
        },
      },
    },
    {
      name: "keywords",
      type: "text",
      label: {
        en: "Keywords",
        uk: "Ключові слова",
        ru: "Ключевые слова",
      },
      admin: {
        placeholder: {
          en: "Comma-separated keywords",
          uk: "Ключові слова через кому",
          ru: "Ключевые слова через запятую",
        },
      },
    },
    {
      name: "slug",
      type: "text",
      required: false,
      label: {
        en: "Slug",
        uk: "URL-адрес",
        ru: "URL-адрес",
      },
      admin: {
        placeholder: {
          en: "Enter URL slug (e.g., about-us)",
          uk: "Введіть URL-адресу (наприклад, about-us)",
          ru: "Введите URL-адрес (например, about-us)",
        },
      },
    },

    {
      name: "canonicalURL",
      type: "text",
      label: {
        en: "Canonical URL",
        uk: "Канонічний URL",
        ru: "Канонический URL",
      },
      admin: {
        placeholder: {
          en: "Enter canonical URL (optional)",
          uk: "Введіть канонічний URL (необов'язково)",
          ru: "Введите канонический URL (необязательно)",
        },
      },
    },
    {
      name: "ogTags",
      type: "group",
      label: {
        en: "Open Graph Tags",
        uk: "Open Graph теги",
        ru: "Open Graph теги",
      },
      fields: [
        {
          name: "ogTitle",
          type: "text",
          label: {
            en: "OG Title",
            uk: "OG Заголовок",
            ru: "OG Заголовок",
          },
        },
        {
          name: "ogDescription",
          type: "textarea",
          label: {
            en: "OG Description",
            uk: "OG Опис",
            ru: "OG Описание",
          },
        },
        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
          label: {
            en: "OG Image",
            uk: "OG Зображення",
            ru: "OG Изображение",
          },
        },
      ],
    },
    {
      name: "layout",
      type: "array",
      label: { en: "Page Layout", uk: "Макет сторінки", ru: "Макет страницы" },
      fields: [
        {
          name: "component",
          type: "select",
          required: true,
          label: { en: "Component", uk: "Компонент", ru: "Компонент" },
          options: [
            { label: "Hero Banner", value: "HeroBanner" },
            { label: "About Us Content", value: "AboutUsContent" },
            { label: "What We Do", value: "WhatWeDo" },
            { label: "Recent Projects", value: "RecentProjects" },
            { label: "Text Slide", value: "TextSlide" },
            { label: "Process", value: "Process" },
            { label: "Clients Feedback", value: "ClientsFeedbackSlider" },
            { label: "Contact Form", value: "ContactForm" },
            { label: "Navbar", value: "Navbar" },
            { label: "Footer", value: "Footer" },
          ],
        },
        {
          name: "props",
          type: "group",
          label: "Component Props",
          fields: [
            {
              name: "content",
              type: "textarea",
              label: "Content",
              required: false,
            },
          ],
        },
      ],
    },
  ],
};
