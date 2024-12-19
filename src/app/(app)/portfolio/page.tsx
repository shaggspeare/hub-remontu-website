import PageTitle from "@/components/Common/PageTitle";
import Projects from "@/components/Portfolio/Projects";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("portfolio");
}

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />
      <PageTitle title="Портфоліо" homeText="Головна" homeUrl="/" />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}
