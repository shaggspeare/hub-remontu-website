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

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("home");
}

export default function Home() {
  return (
    <div className="full-bg-black-color">
      <Navbar />
      <HeroBanner />
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
