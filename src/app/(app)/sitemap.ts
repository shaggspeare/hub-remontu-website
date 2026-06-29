import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { SERVICES } from "@/constants/business";

async function getDynamicProjects() {
  const payload = await getPayload({ config });
  // Fetch all projects from the "projects" collection.
  // Adjust query parameters as needed.
  const { docs } = await payload.find({
    collection: "projects",
  });
  return docs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define your static pages.
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `https://hubremontu.ua/posluhy/${s.slug}/`,
    lastModified: new Date(),
  }));

  const staticPages: MetadataRoute.Sitemap = [
    { url: "https://hubremontu.ua/", lastModified: new Date() },
    { url: "https://hubremontu.ua/portfolio", lastModified: new Date() },
    { url: "https://hubremontu.ua/anketa-form", lastModified: new Date() },
    { url: "https://hubremontu.ua/contact-us", lastModified: new Date() },
    { url: "https://hubremontu.ua/about-us", lastModified: new Date() },
    { url: "https://hubremontu.ua/team", lastModified: new Date() },
    { url: "https://hubremontu.ua/faq", lastModified: new Date() },
    ...servicePages,
  ];

  // Fetch dynamic portfolio project entries.
  const projects = await getDynamicProjects();

  // Map each project to a sitemap entry.
  const dynamicUrls = projects.map((project: any) => ({
    url: `https://hubremontu.ua/portfolio-details/${project.id}/`,
    lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
  }));

  // Return both static and dynamic URLs in the sitemap.
  return [...staticPages, ...dynamicUrls];
}
