"use client";

import { useParams } from "next/navigation"; // For app router
import PageTitle from "@/components/Common/PageTitle";
import PortfolioDetailsContent from "@/components/PortfolioDetails/PortfolioDetailsContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { getPortfolioDetailsById } from "@/data/portfolioDetails";
import GalleryImage from "@/components/Gallery/GalleryImage";

export default function PortfolioPage() {
  const params = useParams();

  // Ensure the ID is always a string, and default to '1' if no ID is provided
  const id = params.id
    ? Array.isArray(params.id)
      ? params.id[0]
      : params.id
    : "1";

  const portfolioDetailsInfo = getPortfolioDetailsById(id);

  if (!portfolioDetailsInfo) {
    return <div>Portfolio details not found.</div>;
  }

  return (
    <div className="full-bg-black-color">
      <Navbar />
      <PageTitle title="Портфоліо" homeText="Головна" homeUrl="/" />
      <PortfolioDetailsContent portfolioDetailsInfo={portfolioDetailsInfo} />
      <GalleryImage galleryImageData={portfolioDetailsInfo.galleryImages} />
      <Footer />
    </div>
  );
}
