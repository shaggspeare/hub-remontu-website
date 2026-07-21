import type { GlobalConfig } from "payload";

export const HeroSection: GlobalConfig = {
  slug: "heroSection",
  label: {
    en: "Hero Section",
    uk: "Головний банер",
  },
  admin: {
    group: {
      en: "Content",
      uk: "Контент",
    },
  },
  fields: [
    {
      name: "headingLine1",
      type: "text",
      required: true,
      defaultValue: "Дизайн зі змістом.",
      label: {
        en: "Heading (line 1)",
        uk: "Заголовок (рядок 1)",
      },
    },
    {
      name: "headingOutline",
      type: "text",
      required: true,
      defaultValue: "Ремонт зі смаком.",
      label: {
        en: "Heading (outline line)",
        uk: "Заголовок (контурний рядок)",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue:
        "Вітаємо! Ми - студія дизайну інтер`єру та комплексного ремонту. У нас можна створити оселю мрії від її концепції до келиха шампанського на честь вашого новосілля!",
      label: {
        en: "Description",
        uk: "Опис",
      },
    },
    {
      name: "ctaLabel",
      type: "text",
      required: true,
      defaultValue: "Отримати консультацію",
      label: {
        en: "Button Label",
        uk: "Текст кнопки",
      },
    },
    {
      name: "ctaLink",
      type: "text",
      required: true,
      defaultValue: "/contact-us",
      label: {
        en: "Button Link",
        uk: "Посилання кнопки",
      },
    },
    {
      name: "videoUrl",
      type: "text",
      required: false,
      defaultValue:
        "https://www.youtube.com/embed/qsWuXD7tRvc?si=GtQnpcuF1HDT57QZ",
      label: {
        en: "Video URL (lightbox)",
        uk: "Посилання на відео (лайтбокс)",
      },
    },
    {
      name: "socialLinks",
      type: "array",
      label: {
        en: "Social Links",
        uk: "Соціальні мережі",
      },
      defaultValue: [
        {
          icon: "ri-telegram-line",
          link: "https://t.me/HUB_GROUP_BOT",
        },
        {
          icon: "ri-facebook-line",
          link: "https://www.facebook.com/profile.php?id=61555825405999",
        },
        {
          icon: "ri-instagram-line",
          link: "https://www.instagram.com/hub_builds",
        },
        {
          icon: "ri-instagram-fill",
          link: "https://www.instagram.com/hub_architects",
        },
      ],
      fields: [
        {
          name: "icon",
          type: "text",
          required: true,
          label: {
            en: "Icon Class (Remix Icon)",
            uk: "Клас іконки (Remix Icon)",
          },
          admin: {
            placeholder: "ri-facebook-line",
          },
        },
        {
          name: "link",
          type: "text",
          required: true,
          label: {
            en: "Link",
            uk: "Посилання",
          },
        },
      ],
    },
  ],
};
