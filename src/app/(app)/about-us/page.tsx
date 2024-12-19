import PageTitle from "@/components/Common/PageTitle";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import QuoteText from "@/components/AboutUs/QuoteText";
import TextSlide from "@/components/Common/TextSlide";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about-us");
}

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle title="Про нас" homeText="Головна" homeUrl="/" />

      <AboutUsContent />

      <QuoteText />

      <TextSlide />

      <Partner />

      <ContactForm />

      <Footer />
    </div>
  );
}
