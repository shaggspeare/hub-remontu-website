import { CollectionConfig, getPayload } from "payload";
import config from "@payload-config";
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
        enabledCollections: ["pages"],
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
    ],
  });
};

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  admin: {
    // Set default sort by order field
    defaultColumns: ["title", "category", "type", "order"],
    useAsTitle: "title",
  },
  // Set default sort order
  defaultSort: "order",
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
      async ({ data }) => {
        // Auto-assign order if not provided
        if (data.order === undefined || data.order === null) {
          // Get the highest order number and add 1
          const payload = await getPayload({ config });
          const existingProjects = await payload.find({
            collection: "projects",
            sort: "-order",
            limit: 1,
          });

          const highestOrder = existingProjects.docs[0]?.order || 0;
          data.order = highestOrder + 1;
        }

        return data;
      },
    ],
  },
  labels: {
    singular: {
      en: "Project",
      uk: "Проєкт",
    },
    plural: {
      en: "Projects",
      uk: "Проєкти",
    },
  },
  fields: [
    {
      name: "viewOnSite",
      type: "ui",
      admin: {
        position: "sidebar",
        components: {
          Field: "@/components/ViewOnSiteButton/ViewOnSiteButton",
        },
      },
    },
    {
      name: "orderManagement",
      type: "ui",
      admin: {
        components: {
          Field: "@/components/ProjectOrder/ProjectOrder",
        },
      },
    },
    {
      name: "order",
      type: "number",
      label: {
        en: "Display Order",
        uk: "Порядок відображення",
      },
      admin: {
        position: "sidebar",
        description: {
          en: "Lower numbers appear first. Leave empty to auto-assign.",
          uk: "Менші числа з'являються першими. Залиште порожнім для автопризначення.",
        },
      },
      defaultValue: 0,
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: {
        en: "Project Title",
        uk: "Назва проєкту",
      },
    },
    {
      name: "category",
      type: "select",
      label: {
        en: "Category",
        uk: "Категорія",
      },
      options: [
        {
          label: {
            en: "Living",
            uk: "Житлова",
          },
          value: "living",
        },
        {
          label: {
            en: "Commercial",
            uk: "Комерційна",
          },
          value: "commercial",
        },
      ],
      required: true,
    },
    {
      name: "type",
      type: "select",
      label: {
        en: "Project Type",
        uk: "Тип проєкту",
      },
      options: [
        {
          label: "Дизайн проект",
          value: "design",
        },
        {
          label: "Реалізація",
          value: "implementation",
        },
      ],
      defaultValue: "implementation",
      required: true,
    },
    {
      name: "mainImage",
      type: "upload",
      label: {
        en: "Main Image",
        uk: "Головне зображення",
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
      },
      relationTo: "images",
      required: true,
    },
    {
      name: "description1",
      label: {
        en: "First Description",
        uk: "Перша частина опису",
      },
      type: "richText",
      editor: createRichEditor(),
      admin: {
        description: {
          en: "Full rich text editor with formatting, lists, links, and media",
          uk: "Повний текстовий редактор з форматуванням, списками, посиланнями та медіа",
        },
      },
    },
    {
      name: "servicesCovered",
      label: {
        en: "Services Covered",
        uk: "Надані послуги",
      },
      type: "array",
      labels: {
        singular: {
          en: "Service",
          uk: "Послуга",
        },
        plural: {
          en: "Services",
          uk: "Послуги",
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
          },
        },
      ],
    },
    {
      name: "description2",
      label: {
        en: "Second Description",
        uk: "Друга частина опису",
      },
      type: "richText",
      editor: createRichEditor(),
      admin: {
        description: {
          en: "Full rich text editor with formatting, lists, links, and media",
          uk: "Повний текстовий редактор з форматуванням, списками, посиланнями та медіа",
        },
      },
    },
    {
      name: "projectDetails",
      label: {
        en: "Project Details",
        uk: "Деталі проєкту",
      },
      type: "group",
      fields: [
        {
          name: "client",
          type: "text",
          label: {
            en: "Client",
            uk: "Клієнт",
          },
        },
        {
          name: "duration",
          type: "text",
          label: {
            en: "Duration",
            uk: "Тривалість",
          },
        },
        {
          name: "squareMeters",
          type: "text",
          label: {
            en: "Square Meters",
            uk: "Площа (м²)",
          },
        },
        {
          name: "services",
          type: "text",
          label: {
            en: "Services",
            uk: "Послуги",
          },
        },
      ],
    },
    {
      name: "galleryImages",
      label: {
        en: "Gallery Images",
        uk: "Галерея зображень",
      },
      type: "relationship",
      relationTo: "images",
      hasMany: true,
      required: false,
      admin: {
        description: {
          en: "Select or upload multiple images for the gallery.",
          uk: "Виберіть або завантажте кілька зображень для галереї.",
        },
      },
    },
    {
      name: "youtubeLink",
      type: "text",
      label: {
        en: "YouTube Link",
        uk: "Посилання на YouTube",
      },
      required: false,
      admin: {
        description: {
          en: "Optional YouTube video link for this project",
          uk: "Необов'язкове посилання на відео YouTube для цього проєкту",
        },
      },
    },
    {
      name: "commentary",
      label: {
        en: "Commentary",
        uk: "Коментар",
      },
      admin: {
        description: {
          en: "Not displayed on site",
          uk: "Не показується на сайті",
        },
      },
      type: "textarea",
    },
  ],
};
