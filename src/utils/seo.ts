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

  return result.docs[0] || null;
}

export async function getPageMetadata(path: string): Promise<Metadata> {
  const seoData = await getSEOByPath(path);

  return {
    title: seoData?.title || "HUB Remontu",
    description: seoData?.description || "HUB Remontu",
    keywords: seoData?.keywords || "",
    alternates: { canonical: `/${path}/` },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      locale: "uk_UA",
      siteName: "Hub Remontu",
      images:
        seoData?.ogImage &&
        typeof seoData?.ogImage === "object" &&
        "url" in seoData.ogImage
          ? [seoData?.ogImage?.url as string]
          : [],
    },
  };
}
