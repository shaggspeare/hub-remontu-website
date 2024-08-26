import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import HeroBanner from "@/components/ArchitectureStudio/HeroBanner";
import AboutUsContent from "@/components/ArchitectureStudio/AboutUsContent";
import Services from "@/components/ArchitectureStudio/Services";
import Partner from "@/components/Common/Partner";
import LatestRecognition from "@/components/ArchitectureStudio/LatestRecognition";
import Projects from "@/components/ArchitectureStudio/Projects";
import ClientsFeedbackSlider from "@/components/Common/ClientsFeedbackSlider";
import TextSlide from "@/components/Common/TextSlide";
import TeamMember from "@/components/Common/TeamMember";
import BlogPost from "@/components/ArchitectureStudio/BlogPost";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";
 
export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <HeroBanner />

      <AboutUsContent />

      <Services />

      <div className="pt-100">
        <Partner />
      </div>

      <LatestRecognition />

      <Projects />

      <div className="section-area-with-line">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="ptb-100">
          <ClientsFeedbackSlider />
        </div>

        <TextSlide />

        <TeamMember />
      </div>

      <div className="pt-100">
        <BlogPost />
      </div>

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
 
      <Footer />
    </>
  )
}
