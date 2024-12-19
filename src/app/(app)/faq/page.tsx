import PageTitle from "@/components/Common/PageTitle";
import FaqsContent from "@/components/Faqs/FaqsContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("faq");
}

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle title="FAQs" homeText="Home" homeUrl="/" />

      <FaqsContent />

      <ContactForm />

      <Footer />
    </div>
  );
}
