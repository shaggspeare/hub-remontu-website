# Claude Code task — make hubremontu.ua AI-citable (GEO/AEO)

> Drop this file in the repo root and run Claude Code against it.
> Repo: `shaggspeare/hub-remontu-website` · Stack: **Next.js 15 (App Router) + PayloadCMS 3 + MongoDB**, deployed with Payload Cloud. Production domain: **https://hubremontu.ua**.
>
> **Goal:** make the site eligible to be found, parsed, and **cited** by AI assistants (ChatGPT Search, Perplexity, Gemini, Google AI Overviews, Claude) when users ask things like *"порадь, де зробити ремонт у Києві"*. This does NOT force any AI to list us — it removes technical blockers and gives the models clean, factual, structured content to cite.
>
> **Hard rules:**
> - Do NOT invent ratings, review counts, or facts. Use only the verified data block below. Where a value is unknown, leave a `// TODO(slava):` and skip it rather than guessing.
> - Do NOT add hidden text, cloaking, or prompt-injection content. Everything must be visible, real content.
> - Keep all user-facing copy in **Ukrainian**. Match the existing code style (TypeScript, `@/` import alias, `.tsx` server components by default).
> - Work in small commits, one task per commit, in the order below.

---

## Verified business data (single source of truth)

Pulled from the repo (`ContactInfo.tsx`, `Footer.tsx`, `next.config.js`) and the client keyword sheet. Use ONLY this:

```
Name (uk):     Hub Remontu / ХАБ Ремонту
Domain:        https://hubremontu.ua
Type:          renovation + interior design contractor (full-cycle, turnkey)
Address:       м. Київ, ЖК Great, Дніпровська набережна, 15Ж, офіс 5 (2-й поверх)
City/Region:   Київ, Україна (postalCode/ TODO if needed)
Phone:         +380683833888  (display: +38 (068) 383 38 88)
Email:         hubremontu@gmail.com
Facebook:      https://www.facebook.com/profile.php?id=61555825405999
Instagram:     https://www.instagram.com/hub_remontu
Telegram:      https://t.me/Design_interiors_HUB
Founded:       ~2011 (13 років досвіду станом на 2024 — verify exact year, use foundingDate only if confirmed)
Track record:  300+ реалізованих обʼєктів; 13 років досвіду  (from client copy)
Price anchor:  від 1000 $/кв.м під ключ  (from client copy — use as priceRange "$$$")
Service areas: Київ + область: Козин, Конча-Заспа, Лісники, Ходосівка, Романків,
               Іванковичі, Гатне, Крюківщина, Софіївська Борщагівка,
               Петропавлівська Борщагівка, Віта-Поштова, Чабани, Стоянка,
               Буча, Ірпінь, Ворзель, Дмитрівка, Білогородка, Green Hills, Riviera Village
GeoCoordinates: // TODO(slava): copy exact lat/lng from the Google Business Profile pin.
                // Approx (ЖК Great, Дніпровська наб.): 50.398, 30.617 — VERIFY before shipping.
Rating:        // TODO(slava): add AggregateRating ONLY if real Google/FB reviews exist. Do NOT fabricate.
```

### Service catalog (from `Hub_2_0.xlsx`) — 6 services, each becomes a page

| # | Service (uk) | Slug | Meta title (≤60) | Meta description (≤155) |
|---|---|---|---|---|
| 1 | Ремонт квартир під ключ | `remont-kvartyr-pid-kliuch` | Ремонт квартир під ключ у Києві — Hub Remontu | Повний цикл: дизайн, ремонт, комплектація. Фіксована ціна в договорі, гарантія, авторський нагляд. 300+ обʼєктів, 13 років досвіду. |
| 2 | Дизайн інтерʼєру | `dyzajn-interieru` | Дизайн інтерʼєру під ключ — Київ \| Hub Remontu | Індивідуальний дизайн-проєкт під ваш стиль і бюджет. 3D-візуалізації, авторський супровід. Реалізація під ключ у Києві та області. |
| 3 | Дизайнерський ремонт | `dyzajnerskyj-remont` | Дизайнерський ремонт під ключ у Києві — Hub Remontu | Ремонт за дизайн-проєктом з авторським наглядом. Один підрядник — повний цикл. Фіксована ціна, оплата за фактом робіт. |
| 4 | Ремонт офісів та комерції | `remont-ofisiv-ta-komertsii` | Ремонт офісів і комерційних приміщень — Київ | Офіси, ресторани, клініки, салони, магазини під ключ. Запускаємо бізнес вчасно, мінімізуємо простій. 300+ проєктів. |
| 5 | Ремонт будинків і котеджів | `remont-budynkiv-ta-kotedzhiv` | Ремонт будинків і котеджів під ключ — Київ та область | Ремонт будинків, котеджів і таунхаусів під ключ. Авторський нагляд, прозора звітність. Київ та область. |
| 6 | Дизайн комерції | `dyzajn-komertsii` | Дизайн комерційних приміщень — Київ \| Hub Remontu | Дизайн офісів, ресторанів, клінік, шоурумів. Реалістичні 3D-візуалізації, реалізація під ключ. |

(Headlines/descriptions in the sheet are Google-Ads assets — reuse their *facts*, but write each page as full prose, not ad fragments.)

---

## Task 1 — Fix site language

`src/app/(app)/layout.tsx`: change `<html lang="en">` → `<html lang="uk">`.
Also add `metadataBase` so OG/canonical URLs resolve (see Task 6).

---

## Task 2 — Central business constants

Create `src/constants/business.ts` so JSON-LD and pages share one source of truth:

```ts
export const BUSINESS = {
  name: "Hub Remontu",
  legalName: "Hub Remontu",
  url: "https://hubremontu.ua",
  logo: "https://hubremontu.ua/images/logo_en.svg",
  email: "hubremontu@gmail.com",
  phone: "+380683833888",
  phoneDisplay: "+38 (068) 383 38 88",
  priceRange: "$$$",
  slogan: "Ремонт та дизайн інтерʼєру під ключ у Києві",
  address: {
    streetAddress: "Дніпровська набережна, 15Ж, офіс 5, ЖК Great",
    addressLocality: "Київ",
    addressRegion: "Київська область",
    addressCountry: "UA",
  },
  // TODO(slava): verify exact coordinates from the Google Business Profile pin.
  geo: { latitude: 50.398, longitude: 30.617 },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61555825405999",
    "https://www.instagram.com/hub_remontu",
    "https://t.me/Design_interiors_HUB",
  ],
  areaServed: [
    "Київ", "Козин", "Конча-Заспа", "Лісники", "Ходосівка", "Романків",
    "Іванковичі", "Гатне", "Крюківщина", "Софіївська Борщагівка",
    "Петропавлівська Борщагівка", "Віта-Поштова", "Чабани", "Стоянка",
    "Буча", "Ірпінь", "Ворзель", "Дмитрівка", "Білогородка",
  ],
} as const;

export const SERVICES = [
  { slug: "remont-kvartyr-pid-kliuch", name: "Ремонт квартир під ключ", serviceType: "Apartment renovation" },
  { slug: "dyzajn-interieru", name: "Дизайн інтерʼєру", serviceType: "Interior design" },
  { slug: "dyzajnerskyj-remont", name: "Дизайнерський ремонт", serviceType: "Designer renovation" },
  { slug: "remont-ofisiv-ta-komertsii", name: "Ремонт офісів та комерції", serviceType: "Commercial renovation" },
  { slug: "remont-budynkiv-ta-kotedzhiv", name: "Ремонт будинків і котеджів", serviceType: "House renovation" },
  { slug: "dyzajn-komertsii", name: "Дизайн комерції", serviceType: "Commercial interior design" },
] as const;
```

---

## Task 3 — JSON-LD component + global Organization/LocalBusiness schema

Create `src/components/SEO/JsonLd.tsx` (server component):

```tsx
export default function JsonLd({ data }: { data: Record<string, any> | Record<string, any>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is data, not user input — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Create `src/lib/schema.ts` with builders:

```ts
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
  // foundingDate: "2011", // TODO(slava): enable only after confirming the year
  // aggregateRating: { ... }, // TODO(slava): add only with real reviews
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

export const serviceSchema = (s: { name: string; slug: string; serviceType: string; description: string }) => ({
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
    "@type": "ListItem", position: i + 1, name: it.name, item: it.url,
  })),
});
```

Then inject the global schema in `src/app/(app)/layout.tsx` — add inside `<body>`, near the top of `{children}`:

```tsx
import JsonLd from "@/components/SEO/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
// ...
<JsonLd data={[localBusinessSchema(), websiteSchema()]} />
```

---

## Task 4 — robots.txt: explicitly allow AI crawlers

Replace `public/robots.txt` with the block below. Rationale (verified mid-2026): crawl access only makes a page *eligible* for AI citation; blocking the search/retrieval bots removes the site from generative answers entirely. For a marketing site we want **all** major AI bots allowed. Keep admin/api/temp blocked, keep the sitemap line.

```
# --- Standard search ---
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /

# --- OpenAI (ChatGPT) ---
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /

# --- Anthropic (Claude) ---
User-agent: ClaudeBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: anthropic-ai
Allow: /

# --- Perplexity ---
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /

# --- Google Gemini / Apple / others ---
User-agent: Google-Extended
Allow: /
User-agent: Applebot
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Amazonbot
Allow: /
User-agent: meta-externalagent
Allow: /

# --- Default ---
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /temp/

Sitemap: https://hubremontu.ua/sitemap.xml
```

> **Manual check for Slava (not code):** confirm Payload Cloud / any CDN in front of the site does NOT have an "Block AI bots / AI Scrapers" toggle enabled — a WAF-level block overrides robots.txt. Also verify `https://hubremontu.ua/robots.txt` returns 200 after deploy.

---

## Task 5 — Service pages (the biggest content lever)

Create a route group `src/app/(app)/posluhy/[slug]/page.tsx` that renders one page per `SERVICES` entry, OR six static pages under `posluhy/<slug>/page.tsx`. Prefer the dynamic `[slug]` approach driven by a `src/data/services.tsx` content file so copy is editable in one place.

Each service page MUST contain, as **real visible text** (not just images — the site is image-heavy and thin on crawlable text, which is the core problem for AI citation):

1. One `<h1>` = the service name + «у Києві».
2. A 2–3 sentence intro that directly answers *"де / у кого замовити <послугу> у Києві"* and names Hub Remontu.
3. A facts block (`<ul>`): 13 років досвіду · 300+ реалізованих обʼєктів · фіксована ціна в договорі · гарантія на роботи · авторський нагляд · власна команда вузькопрофільних майстрів · повний цикл (один підрядник) · Київ + область.
4. Price anchor sentence: «Ремонт під ключ — від 1000 $/кв.м.» (only this confirmed figure).
5. Process steps (заявка → зустріч → договір → дизайн/реалізація → здача).
6. Service-area sentence listing the localities from `BUSINESS.areaServed`.
7. A 4–6 item FAQ specific to the service (see Task 7 patterns).
8. CTA to `/contact-us` / `/anketa-form`.
9. `generateMetadata()` using the title/description from the table above (extend the existing `getPageMetadata` pattern or set directly).
10. `<JsonLd>` with `serviceSchema(...)`, `breadcrumbSchema(...)`, and the page-level `faqSchema(...)`.

Add all six `/posluhy/<slug>/` URLs to `src/app/(app)/sitemap.ts` (extend the `staticPages` array). Link the service pages from the main nav / `WhatWeDo` component so they're crawlable from the homepage.

> Alternative path (if the team prefers CMS-driven): create these as entries in the existing Payload `pages` collection + `seo` collection and render via the existing `[slug]` route + `componentMap`. Either works; pick one and be consistent.

---

## Task 6 — Metadata, canonical, locale

In `src/app/(app)/layout.tsx` add:

```ts
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://hubremontu.ua"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "uk_UA", siteName: "Hub Remontu" },
};
```

Extend `src/utils/seo.ts` `getPageMetadata` to also set `alternates.canonical` (per path) and `openGraph.locale: "uk_UA"`. Remove the stray `console.log(result)` in `getSEOByPath`. Seed the `seo` Payload collection with title/description for `home`, each `posluhy/<slug>`, `about-us`, `portfolio`, `contact-us`, `faq` using the copy in the table above.

> Note: root-layout `metadata` and per-page `generateMetadata` coexist fine; per-page wins. Do not add `noindex` to any page you want AI-cited.

---

## Task 7 — Answer-engine FAQ (what actually gets pulled into AI answers)

The existing FAQ (`src/components/Faqs/FaqsContent.tsx`) stores Q&A as JSX. For schema, build a plain-text mirror array (don't try to serialize JSX). Add these high-intent Q&As (they mirror real user prompts to assistants) to the FAQ page and emit `faqSchema(...)`:

```ts
export const faqAnswerEngine = [
  { q: "Де замовити ремонт квартири під ключ у Києві?",
    a: "Hub Remontu виконує ремонт квартир під ключ у Києві та області: повний цикл від дизайн-проєкту до меблювання однією командою. 13 років досвіду, 300+ реалізованих обʼєктів, фіксована ціна в договорі та гарантія на роботи." },
  { q: "Скільки коштує ремонт під ключ у Києві?",
    a: "Орієнтовна вартість ремонту під ключ у Hub Remontu — від 1000 $/кв.м. Точна ціна фіксується в договорі після дизайн-проєкту; оплата поетапно за фактом виконаних робіт." },
  { q: "Хто робить дизайнерський ремонт будинків у Конча-Заспі, Козині, Лісниках?",
    a: "Hub Remontu виконує дизайнерський ремонт будинків і котеджів у передмісті Києва — зокрема Конча-Заспа, Козин, Лісники, Ходосівка, Романків — з авторським наглядом на кожному етапі." },
  { q: "Яка компанія робить ремонт офісів і комерційних приміщень у Києві?",
    a: "Hub Remontu робить ремонт офісів, ресторанів, клінік, салонів і магазинів під ключ у Києві, мінімізуючи простій бізнесу та дотримуючись термінів." },
  // TODO(slava): add more from the keyword sheet as needed.
];
```

These short, factual, brand-named answers are the format AI assistants extract most readily.

---

## Task 8 — llms.txt

Create `public/llms.txt` (Markdown). Honest note: as of mid-2026 there's no proven retrieval boost from llms.txt, but it's cheap and forward-looking.

```
# Hub Remontu

> Компанія повного циклу: ремонт та дизайн інтерʼєру під ключ у Києві та області. 13 років досвіду, 300+ реалізованих обʼєктів. Фіксована ціна в договорі, гарантія, авторський нагляд.

## Послуги
- [Ремонт квартир під ключ](https://hubremontu.ua/posluhy/remont-kvartyr-pid-kliuch/)
- [Дизайн інтерʼєру](https://hubremontu.ua/posluhy/dyzajn-interieru/)
- [Дизайнерський ремонт](https://hubremontu.ua/posluhy/dyzajnerskyj-remont/)
- [Ремонт офісів та комерції](https://hubremontu.ua/posluhy/remont-ofisiv-ta-komertsii/)
- [Ремонт будинків і котеджів](https://hubremontu.ua/posluhy/remont-budynkiv-ta-kotedzhiv/)
- [Дизайн комерції](https://hubremontu.ua/posluhy/dyzajn-komertsii/)

## Контакти
- Телефон: +38 (068) 383 38 88
- Email: hubremontu@gmail.com
- Адреса: м. Київ, Дніпровська набережна, 15Ж, ЖК Great
- Зона робіт: Київ та область (Конча-Заспа, Козин, Лісники, Буча, Ірпінь та ін.)

## Портфоліо
- [Портфоліо](https://hubremontu.ua/portfolio/)
```

---

## Task 9 — Crawlable-text & alt-text hygiene

- Ensure portfolio and project images have descriptive Ukrainian `alt` (e.g. «Ремонт трикімнатної квартири під ключ, Київ, ЖК…»). The `Images`/`Projects` Payload collections likely need an `alt` field surfaced — add/fill it. Descriptive alt text on real renovation photos is strong AI/SEO signal.
- Make sure the homepage and service pages render meaningful text server-side (not solely client-rendered after JS) so retrieval crawlers see it.

---

## Acceptance checklist

- [ ] `<html lang="uk">`
- [ ] `https://hubremontu.ua/robots.txt` returns 200 and lists the AI bots; no WAF AI-block
- [ ] Global `LocalBusiness` + `WebSite` JSON-LD validates (https://validator.schema.org & Google Rich Results Test)
- [ ] 6 `/posluhy/<slug>/` pages live, in nav, in sitemap, each with text + `Service` + `FAQPage` JSON-LD
- [ ] FAQ page emits `FAQPage` schema incl. the answer-engine Q&As
- [ ] Per-page titles/descriptions set; canonical + `uk_UA` locale
- [ ] `public/llms.txt` reachable
- [ ] No fabricated ratings/facts anywhere; all `TODO(slava)` resolved or left explicit
- [ ] `pnpm build` (or npm) passes; sitemap still generated

When done, summarize which `TODO(slava)` items remain (coordinates, founding year, ratings) so Slava can fill verified values.
