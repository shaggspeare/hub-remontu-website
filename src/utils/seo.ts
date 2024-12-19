import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from "next";

export async function getSEOByPath(path: string) {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "seo",
    where: { pagePath: { equals: path } },
    limit: 1,
  });

  console.log(result);

  return result.docs[0] || null;
}

/**
 * Generates metadata for a given path dynamically.
 * @param path - The current path or slug
 */
export async function getPageMetadata(path: string): Promise<Metadata> {
  const seoData = await getSEOByPath(path);

  return {
    title: seoData?.title || "HUB Remontu",
    description: seoData?.description || "HUB Remontu",
    keywords: seoData?.keywords || "",
    icons: {
      icon: "/favicon.ico", // Path to the favicon in the public folder
    },
    openGraph: {
      images:
        seoData?.ogImage &&
        typeof seoData?.ogImage === "object" &&
        "url" in seoData.ogImage
          ? [seoData?.ogImage?.url as string]
          : [],
    },
  };
}
