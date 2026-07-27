import { Metadata } from "next";
import PageTitle from "@/components/Common/PageTitle";
import DepartmentPricing from "@/components/Pricing/DepartmentPricing";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ContactForm from "@/components/ContactUs/ContactForm";
import { getPageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("tsiny");
}

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle title="Ціни" homeText="Головна" homeUrl="/" />

      <DepartmentPricing />

      <ContactForm />

      <Footer />
    </div>
  );
}
