import PageTitle from "@/components/Common/PageTitle";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import LatestRecognition from "@/components/ArchitectureStudio/LatestRecognition";
import QuoteText from "@/components/AboutUs/QuoteText";
import ClientsFeedbackSlider from "@/components/Common/ClientsFeedbackSlider";
import TextSlide from "@/components/Common/TextSlide";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import Partner from "@/components/Common/Partner";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar/>

      <PageTitle 
        title="About Us"
        homeText="Home"
        homeUrl="/"
      />

      <AboutUsContent />

      <LatestRecognition />

      <QuoteText />

      <div className="ptb-100">
        <ClientsFeedbackSlider />
      </div>

      <TextSlide />

      <TeamMemberStyle2 />

      <div className="pt-100">
        <Partner />
      </div>

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
      
      <Footer />
    </div>
  )
}
