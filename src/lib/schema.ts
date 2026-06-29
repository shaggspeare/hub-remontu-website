import { BUSINESS } from "@/constants/business";

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": `${BUSINESS.url}/#business`,
  name: BUSINESS.name,
  url: BUSINESS.url,
  image: BUSINESS.logo,
  logo: BUSINESS.logo,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  slogan: BUSINESS.slogan,
  address: { "@type": "PostalAddress", ...BUSINESS.address },
  geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
  areaServed: BUSINESS.areaServed.map((n) => ({ "@type": "City", name: n })),
  sameAs: [...BUSINESS.sameAs],
  // foundingDate: "2011", // TODO(slava): enable only after confirming the exact founding year
  // aggregateRating: { ... }, // TODO(slava): add only with real Google/FB reviews
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BUSINESS.url}/#website`,
  url: BUSINESS.url,
  name: BUSINESS.name,
  inLanguage: "uk",
  publisher: { "@id": `${BUSINESS.url}/#business` },
});

export const serviceSchema = (s: {
  name: string;
  slug: string;
  serviceType: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.serviceType,
  description: s.description,
  url: `${BUSINESS.url}/posluhy/${s.slug}/`,
  provider: { "@id": `${BUSINESS.url}/#business` },
  areaServed: BUSINESS.areaServed.map((n) => ({ "@type": "City", name: n })),
});

export const faqSchema = (qa: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qa.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});
