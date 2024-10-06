"use client";

import PageTitle from "@/components/Common/PageTitle";
import PortfolioDetailsContent from "@/components/PortfolioDetails/PortfolioDetailsContent";
import Footer from "@/components/Layout/Footer";
import ProjectGallery from "@/components/PortfolioDetails/ProjectGallery";
import Navbar from "@/components/Layout/Navbar";
import { getPortfolioDetailsById } from "@/data/portfolioDetails";
import GalleryImage from "@/components/Gallery/GalleryImage";

export default function PortfolioDetailsDefaultPage() {
  const portfolioDetailsInfo = getPortfolioDetailsById("1"); // Default to ID 1

  if (!portfolioDetailsInfo) {
    return <div>Portfolio details not found.</div>;
  }

  return (
    <div className="full-bg-black-color">
      <Navbar />
      <PageTitle title="Портфоліо" homeText="Головна" homeUrl="/" />
      <PortfolioDetailsContent portfolioDetailsInfo={portfolioDetailsInfo} />
      <GalleryImage />
      <Footer />
    </div>
  );
}
