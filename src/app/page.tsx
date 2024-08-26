import Navbar from "@/components/Layout/Navbar";
import HeroBanner from "@/components/ArchitectureHome/HeroBanner";
import AboutUsContent from "@/components/ArchitectureHome/AboutUsContent";
import WhatWeDo from "@/components/ArchitectureHome/WhatWeDo";
import Overview from "@/components/ArchitectureHome/Overview";
import CoreFeatures from "@/components/ArchitectureHome/CoreFeatures";
import LatestRecognition from "@/components/ArchitectureHome/LatestRecognition";
import RecentProjects from "@/components/ArchitectureHome/RecentProjects";
import TextSlide from "@/components/Common/TextSlide";
import Process from "@/components/ArchitectureHome/Process";
import ClientsFeedbackSlider from "@/components/ArchitectureHome/ClientsFeedbackSlider";
import BlogPost from "@/components/ArchitectureHome/BlogPost";
import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <HeroBanner />

      <AboutUsContent />

      <WhatWeDo />

      <Overview />

      <CoreFeatures />

      <LatestRecognition />

      <RecentProjects />

      <TextSlide />

      <Process />

      <ClientsFeedbackSlider />

      <BlogPost />

      <ContactForm />

      <Footer />
    </div>
  );
}
