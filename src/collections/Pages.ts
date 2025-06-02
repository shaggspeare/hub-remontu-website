import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: {
      en: "Page",
      uk: "Сторінка",
    },
    plural: {
      en: "Pages",
      uk: "Сторінки",
    },
  },
  admin: {
    useAsTitle: "title",
    group: {
      en: "Content",
      uk: "Контент",
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
      },
      admin: {
        placeholder: {
          en: "Enter page title",
          uk: "Введіть заголовок сторінки",
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
      },
      admin: {
        placeholder: {
          en: "Enter meta description",
          uk: "Введіть мета-опис",
        },
      },
    },
    {
      name: "keywords",
      type: "text",
      label: {
        en: "Keywords",
        uk: "Ключові слова",
      },
      admin: {
        placeholder: {
          en: "Comma-separated keywords",
          uk: "Ключові слова через кому",
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
      },
      admin: {
        placeholder: {
          en: "Enter canonical URL (optional)",
          uk: "Введіть канонічний URL (необов'язково)",
        },
      },
    },
    {
      name: "ogTags",
      type: "group",
      label: {
        en: "Open Graph Tags",
        uk: "Open Graph теги",
      },
      fields: [
        {
          name: "ogTitle",
          type: "text",
          label: {
            en: "OG Title",
            uk: "OG Заголовок",
          },
        },
        {
          name: "ogDescription",
          type: "textarea",
          label: {
            en: "OG Description",
            uk: "OG Опис",
          },
        },
        {
          name: "ogImage",
          type: "upload",
          relationTo: "images",
          label: {
            en: "OG Image",
            uk: "OG Зображення",
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
