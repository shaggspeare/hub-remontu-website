
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";
import AnketaHeader from "@/components/AnketaHeader/AnketaHeader";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("request-quote");
}

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />
      <AnketaHeader/>
      <Footer />
    </div>
  );
}
