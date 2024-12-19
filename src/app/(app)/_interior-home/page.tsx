import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import HeroBanner from "@/components/InteriorHome/HeroBanner";
import ElevatingInteriorsTransforming from "@/components/InteriorHome/ElevatingInteriorsTransforming";
import AboutUsContent from "@/components/InteriorHome/AboutUsContent";
import Overview from "@/components/InteriorHome/Overview";
import ServicesTab from "@/components/InteriorHome/Services/ServicesTab";
import LatestRecognition from "@/components/InteriorHome/LatestRecognition";
import Funfacts from "@/components/InteriorHome/Funfacts";
import ProjectsSlider from "@/components/InteriorHome/ProjectsSlider";
import ClientsFeedbackSlider from "@/components/Common/ClientsFeedbackSlider";
import TextSlide from "@/components/Common/TextSlide";
import BlogPost from "@/components/InteriorHome/BlogPost";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";
 
export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <HeroBanner />

      <ElevatingInteriorsTransforming />

      <AboutUsContent />

      <Overview />

      <ServicesTab />

      <LatestRecognition />

      <div className="section-area-with-line">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Funfacts />

        <ProjectsSlider />

        <ClientsFeedbackSlider />

        <div className="pt-100">
          <TextSlide />
        </div>

        <BlogPost />
      </div>

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
      
      <Footer />
    </>
  )
}
