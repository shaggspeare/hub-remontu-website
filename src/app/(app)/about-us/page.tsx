import PageTitle from "@/components/Common/PageTitle";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import QuoteText from "@/components/AboutUs/QuoteText";
import TextSlide from "@/components/Common/TextSlide";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/ContactUs/ContactForm";

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle title="Про нас" homeText="Головна" homeUrl="/" />

      <AboutUsContent />

      <QuoteText />

      <TextSlide />

      <div className="pt-100">
        <Partner />
      </div>

      <div className="pb-100">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
