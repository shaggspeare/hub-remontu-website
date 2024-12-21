import { CollectionConfig } from "payload";

export const SEO: CollectionConfig = {
  slug: "seo",
  labels: { singular: "SEO Tag", plural: "SEO Tags" },
  fields: [
    {
      name: "pagePath",
      label: "Page Path",
      type: "text",
      required: true,
      unique: true,
    },
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "keywords", label: "Keywords", type: "text" },
    { name: "ogImage", label: "OG Image", type: "upload", relationTo: "images" },
  ],
};

