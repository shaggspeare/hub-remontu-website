import PageTitle from "@/components/Common/PageTitle";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PortfolioDetailsContent from "@/components/PortfolioDetails/PortfolioDetailsContent";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";

export const revalidate = 60;

// @ts-ignore
export async function generateMetadata({ params }): Promise<Metadata> {
  const { id } = await params;

  return getPageMetadata(`portfolio-details/${id}`);
}

// @ts-ignore
export default async function PortfolioPage({ params }) {
  const { id } = await params;

  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    where: {
      id: { equals: id },
    },
  });

  if (!docs || docs.length === 0) {
    notFound();
  }

  const project = docs[0];

  console.log("project", id, project);

  return (
    <div className="full-bg-black-color">
      <Navbar />
      <PageTitle title="Портфоліо" homeText="Головна" homeUrl="/" />
      {/* @ts-ignore */}
      <PortfolioDetailsContent project={project} />
      <Footer />
    </div>
  );
}
