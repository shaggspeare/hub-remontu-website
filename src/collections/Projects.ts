import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      en: "Project",
      uk: "Проєкт",
      ru: "Проект",
    },
    plural: {
      en: "Projects",
      uk: "Проєкти",
      ru: "Проекты",
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: {
        en: "Project Title",
        uk: "Назва проєкту",
        ru: "Название проекта",
      },
    },
    {
      name: "category",
      type: "select",
      label: {
        en: "Category",
        uk: "Категорія",
        ru: "Категория",
      },
      options: [
        {
          label: {
            en: "Living",
            uk: "Житлова",
            ru: "Жилая",
          },
          value: "living",
        },
        {
          label: {
            en: "Commercial",
            uk: "Комерційна",
            ru: "Коммерческая",
          },
          value: "commercial",
        },
      ],
      required: true,
    },
    {
      name: "mainImage",
      type: "upload",
      label: {
        en: "Main Image",
        uk: "Головне зображення",
        ru: "Главное изображение",
      },
      relationTo: "images",
      required: true,
    },
    {
      name: "verticalImage",
      type: "upload",
      label: {
        en: "In Grid Image",
        uk: "Зображення в сітці",
        ru: "Изображение в сетке",
      },
      relationTo: "images",
      required: true,
    },
    {
      name: "description1",
      label: {
        en: "First Description",
        uk: "Перша частина опису",
        ru: "Первое описание",
      },
      type: "textarea",
    },
    {
      name: "servicesCovered",
      label: {
        en: "Services Covered",
        uk: "Надані послуги",
        ru: "Оказанные услуги",
      },
      type: "array",
      labels: {
        singular: {
          en: "Service",
          uk: "Послуга",
          ru: "Услуга",
        },
        plural: {
          en: "Services",
          uk: "Послуги",
          ru: "Услуги",
        },
      },
      fields: [
        {
          name: "service",
          type: "text",
          required: true,
          label: {
            en: "Service",
            uk: "Послуга",
            ru: "Услуга",
          },
        },
      ],
    },
    {
      name: "description2",
      label: {
        en: "Second Description",
        uk: "Друга частина опису",
        ru: "Второе описание",
      },
      type: "textarea",
    },
    {
      name: "projectDetails",
      label: {
        en: "Project Details",
        uk: "Деталі проєкту",
        ru: "Детали проекта",
      },
      type: "group",
      fields: [
        {
          name: "client",
          type: "text",
          label: {
            en: "Client",
            uk: "Клієнт",
            ru: "Клиент",
          },
        },
        {
          name: "duration",
          type: "text",
          label: {
            en: "Duration",
            uk: "Тривалість",
            ru: "Продолжительность",
          },
        },
        {
          name: "squareMeters",
          type: "text",
          label: {
            en: "Square Meters",
            uk: "Площа (м²)",
            ru: "Площадь (м²)",
          },
        },
        {
          name: "services",
          type: "text",
          label: {
            en: "Services",
            uk: "Послуги",
            ru: "Услуги",
          },
        },
      ],
    },
    {
      name: "galleryImages",
      label: {
        en: "Gallery Images",
        uk: "Галерея зображень",
        ru: "Галерея изображений",
      },
      fields: [
        {
          name: "galleryImage",
          type: "upload",
          relationTo: "images",
          required: true,
          label: {
            en: "GalleryImage",
            uk: "Зображення",
            ru: "Изображение",
          },
        },
      ],
      type: "array",
      required: false, // can set true if needed
    },
  ],
};
