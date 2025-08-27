
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";
import NewProjectForm from "@/components/NewProjectForm/NewProjectForm";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("anketa-form");
}

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />
      <NewProjectForm/>
      <Footer />
    </div>
  );
}
