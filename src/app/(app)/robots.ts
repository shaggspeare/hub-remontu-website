import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/temp/"],
    },
    sitemap: "https://hubremontu.ua/sitemap.xml",
  };
}
