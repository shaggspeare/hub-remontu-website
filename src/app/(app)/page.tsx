// app/home/page.tsx
import Navbar from "@/components/Layout/Navbar";
import HeroBanner from "@/components/ArchitectureHome/HeroBanner";
import AboutUsContent from "@/components/ArchitectureHome/AboutUsContent";
import WhatWeDo from "@/components/ArchitectureHome/WhatWeDo";
import RecentProjects from "@/components/ArchitectureHome/RecentProjects";
import TextSlide from "@/components/Common/TextSlide";
import Process from "@/components/ArchitectureHome/Process";
import ClientsFeedbackSlider from "@/components/ArchitectureHome/ClientsFeedbackSlider";
import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Layout/Footer";
import { getPageMetadata } from "@/utils/seo";
import { Metadata } from "next";
import config from "@payload-config";
import { getPayload } from "payload";
import type { HeroSection } from "@/payload-types";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("home");
}

export default async function Home() {
  let hero: HeroSection | null = null;
  try {
    const payload = await getPayload({ config });
    hero = await payload.findGlobal({ slug: "heroSection" });
  } catch {
    hero = null;
  }

  return (
    <div className="full-bg-black-color">
      <Navbar />
      <HeroBanner
        headingLine1={hero?.headingLine1}
        headingOutline={hero?.headingOutline}
        description={hero?.description}
        ctaLabel={hero?.ctaLabel}
        ctaLink={hero?.ctaLink}
        videoUrl={hero?.videoUrl ?? undefined}
        socialLinks={hero?.socialLinks ?? undefined}
      />
      <AboutUsContent />
      <WhatWeDo />
      <RecentProjects />
      <TextSlide />
      <Process />
      <ClientsFeedbackSlider />
      <ContactForm />
      <Footer />
    </div>
  );
}
