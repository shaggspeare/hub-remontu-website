import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageTitle from "@/components/Common/PageTitle";
import ContactForm from "@/components/ContactUs/ContactForm";
import JsonLd from "@/components/SEO/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { BUSINESS, SERVICES } from "@/constants/business";
import { servicesData, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/posluhy/${slug}/` },
    openGraph: { locale: "uk_UA", siteName: "Hub Remontu" },
  };
}

const areaServedSentence = BUSINESS.areaServed.join(", ");

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const schemaData = [
    serviceSchema({
      name: service.name,
      slug: service.slug,
      serviceType: service.serviceType,
      description: service.metaDescription,
    }),
    faqSchema(service.faqs),
    breadcrumbSchema([
      { name: "Головна", url: BUSINESS.url },
      { name: "Послуги", url: `${BUSINESS.url}/posluhy/` },
      { name: service.name, url: `${BUSINESS.url}/posluhy/${slug}/` },
    ]),
  ];

  return (
    <div className="full-bg-black-color">
      <JsonLd data={schemaData} />

      <Navbar />

      <PageTitle title={service.name} homeText="Головна" homeUrl="/" />

      <section className="ptb-100">
        <div className="container">
          <h1 style={{ color: "var(--whiteColor)", marginBottom: "24px" }}>
            {service.h1}
          </h1>

          <p style={{ color: "var(--whiteColor)", fontSize: "18px", marginBottom: "32px" }}>
            {service.intro}
          </p>

          <p style={{ color: "var(--whiteColor)", marginBottom: "40px" }}>
            {service.description}
          </p>

          {/* Key facts */}
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "var(--whiteColor)", marginBottom: "20px" }}>
              Чому обирають Hub Remontu
            </h2>
            <ul style={{ color: "var(--whiteColor)", lineHeight: "2", paddingLeft: "20px" }}>
              <li>13 років досвіду в ремонті та дизайні</li>
              <li>300+ реалізованих обʼєктів у Києві та області</li>
              <li>Фіксована ціна в договорі — жодних прихованих доплат</li>
              <li>Гарантія на всі виконані роботи</li>
              <li>Авторський нагляд на кожному етапі</li>
              <li>Власна команда вузькопрофільних майстрів</li>
              <li>Повний цикл — один підрядник від проєкту до здачі</li>
              <li>Київ та область: Конча-Заспа, Козин, Буча, Ірпінь та інші</li>
            </ul>
          </div>


          {/* Process */}
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "var(--whiteColor)", marginBottom: "20px" }}>
              Як ми працюємо
            </h2>
            <ol style={{ color: "var(--whiteColor)", lineHeight: "2.2", paddingLeft: "20px" }}>
              <li>Заявка — залишаєте контакти або телефонуєте нам</li>
              <li>Зустріч — виїжджаємо на обʼєкт, обговорюємо побажання</li>
              <li>Договір — фіксуємо ціну, терміни та обсяг робіт</li>
              <li>Дизайн — розробляємо проєкт і узгоджуємо з вами</li>
              <li>Реалізація — будуємо за проєктом, звітуємо щотижня</li>
              <li>Здача — підписуємо акт, ви отримуєте готовий результат</li>
            </ol>
          </div>

          {/* Service area */}
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "var(--whiteColor)", marginBottom: "16px" }}>
              Зона обслуговування
            </h2>
            <p style={{ color: "var(--whiteColor)" }}>
              Hub Remontu виконує роботи у Києві та Київській області:{" "}
              {areaServedSentence}.
            </p>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "var(--whiteColor)", marginBottom: "24px" }}>
              Питання та відповіді
            </h2>
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  paddingBottom: "20px",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    color: "var(--whiteColor)",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: "var(--whiteColor)", margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/anketa-form" className="default-btn">
              Заповнити анкету для консультації
            </Link>
            <Link
              href="/contact-us"
              style={{
                border: "1px solid var(--primaryColor)",
                padding: "12px 24px",
                color: "var(--whiteColor)",
                textDecoration: "none",
              }}
            >
              Контакти
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="pb-75">
        <div className="container">
          <h2 style={{ color: "var(--whiteColor)", marginBottom: "24px" }}>
            Інші послуги Hub Remontu
          </h2>
          <div className="row g-3">
            {servicesData
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <div key={s.slug} className="col-md-4 col-sm-6">
                  <Link
                    href={`/posluhy/${s.slug}/`}
                    style={{
                      display: "block",
                      border: "1px solid rgba(255,255,255,0.15)",
                      padding: "16px",
                      color: "var(--whiteColor)",
                      textDecoration: "none",
                    }}
                  >
                    {s.name}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}
