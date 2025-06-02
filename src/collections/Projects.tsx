import { CollectionConfig } from "payload";
import {
  lexicalEditor,
  // Text formatting features
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  InlineCodeFeature,
  // Paragraph features
  ParagraphFeature,
  HeadingFeature,
  // List features
  OrderedListFeature,
  UnorderedListFeature,
  ChecklistFeature,
  // Block features
  BlockquoteFeature,
  HorizontalRuleFeature,
  // Link features
  LinkFeature,
  // Advanced features
  AlignFeature,
  IndentFeature,
  // Upload feature for inline images
  UploadFeature,
} from "@payloadcms/richtext-lexical";

// Helper function to convert plain text to Lexical format
function convertTextToLexical(text: string) {
  if (!text) return null;

  const paragraphs = text.split("\n").filter((p) => p.trim());

  const children = paragraphs.map((paragraph) => ({
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: paragraph.trim(),
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  }));

  if (children.length === 0 && text.trim()) {
    children.push({
      children: [
        {
          detail: 0,
          format: 0,
          mode: "normal",
          style: "",
          text: text.trim(),
          type: "text",
          version: 1,
        },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      type: "paragraph",
      version: 1,
    });
  }

  return {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,
      children: children,
      direction: "ltr",
    },
  };
}

// Create a rich editor configuration with all features
const createRichEditor = () => {
  return lexicalEditor({
    features: [
      // Paragraph types
      ParagraphFeature(),
      HeadingFeature({
        enabledHeadingSizes: ["h1", "h2", "h3", "h4", "h5", "h6"],
      }),

      // Text formatting
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      SubscriptFeature(),
      SuperscriptFeature(),
      InlineCodeFeature(),

      // Lists
      OrderedListFeature(),
      UnorderedListFeature(),
      ChecklistFeature(),

      // Blocks
      BlockquoteFeature(),
      HorizontalRuleFeature(),

      // Links
      LinkFeature({
        enabledCollections: ["pages",], // Add your collection names here
        fields: [
          {
            name: "rel",
            type: "select",
            label: "Rel Attribute",
            options: ["nofollow", "noopener", "noreferrer"],
          },
          {
            name: "newTab",
            type: "checkbox",
            label: "Open in new tab",
          },
        ],
      }),

      // Layout
      AlignFeature(),
      IndentFeature(),

      // Media
      UploadFeature({
        collections: {
          images: {
            fields: [
              {
                name: "alt",
                type: "text",
                label: "Alt Text",
                required: true,
              },
              {
                name: "caption",
                type: "text",
                label: "Caption",
              },
            ],
          },
        },
      }),

      // You can also add custom blocks if needed
      // BlocksFeature({
      //   blocks: [
      //     // Add your custom block configs here
      //   ],
      // }),
    ],
  });
};

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  hooks: {
    // This hook will run before reading data
    afterRead: [
      async ({ doc }) => {
        let modified = false;
        const updatedDoc = { ...doc };

        // Convert description1 if it's a string
        if (doc.description1 && typeof doc.description1 === "string") {
          updatedDoc.description1 = convertTextToLexical(doc.description1);
          modified = true;
        }

        // Convert description2 if it's a string
        if (doc.description2 && typeof doc.description2 === "string") {
          updatedDoc.description2 = convertTextToLexical(doc.description2);
          modified = true;
        }

        return modified ? updatedDoc : doc;
      },
    ],
    // This hook will save the converted data when updating
    beforeChange: [
      async ({ data, originalDoc }) => {
        // If original had string descriptions and new data has them as objects,
        // ensure they're properly formatted
        if (originalDoc) {
          if (
            typeof originalDoc.description1 === "string" &&
            data.description1
          ) {
            // Data is already converted by afterRead hook
          }
          if (
            typeof originalDoc.description2 === "string" &&
            data.description2
          ) {
            // Data is already converted by afterRead hook
          }
        }
        return data;
      },
    ],
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
      type: "richText",
      editor: createRichEditor(),
      admin: {
        description: {
          en: "Full rich text editor with formatting, lists, links, and media",
          uk: "Повний текстовий редактор з форматуванням, списками, посиланнями та медіа",
          ru: "Полный текстовый редактор с форматированием, списками, ссылками и медиа",
        },
      },
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
      type: "richText",
      editor: createRichEditor(),
      admin: {
        description: {
          en: "Full rich text editor with formatting, lists, links, and media",
          uk: "Повний текстовий редактор з форматуванням, списками, посиланнями та медіа",
          ru: "Полный текстовый редактор с форматированием, списками, ссылками и медиа",
        },
      },
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
      type: "relationship",
      relationTo: "images",
      hasMany: true,
      required: false,
      admin: {
        description: {
          en: "Select or upload multiple images for the gallery.",
          uk: "Виберіть або завантажте кілька зображень для галереї.",
          ru: "Выберите или загрузите несколько изображений для галереи.",
        },
      },
    },
    {
      name: "commentary",
      label: {
        en: "Commentary",
        uk: "Коментар",
        ru: "Комментарий",
      },
      admin: {
        description: {
          en: "Not displayed on site",
          uk: "Не показується на сайті",
          ru: "Не показывается на сайте",
        },
      },
      type: "textarea",
    },
  ],
};
