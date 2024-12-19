"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import GalleryImage from "@/components/Gallery/GalleryImage";

interface PayloadProject {
  id: string;
  title: string;
  mainImage: any; // <-- allow a string fallback
  description1?: string;
  description2?: string;
  servicesCovered?: { service: string }[];
  projectDetails?: {
    client?: string;
    duration?: string;
    squareMeters?: string;
    services?: string;
  };
  galleryImages?: {
    galleryImage: {
      id: string;
      url: string;
      alt: string;
    };
  }[];
}
interface PortfolioDetailsContentProps {
  project: PayloadProject;
}

const PortfolioDetailsContent: React.FC<PortfolioDetailsContentProps> = ({
  project,
}) => {
  if (!project) {
    return <div style={{ color: "#fff" }}>Project not found.</div>;
  }

  const portfolioDetailsInfo = {
    title: project.title || "",
    mainImage: project.mainImage?.url || "",
    description: {
      part1: <p>{project.description1}</p>,
      part2: <p>{project.description2}</p>,
    },
    servicesCovered: project.servicesCovered?.map((item) => item.service) || [],
    projectDetails: {
      client: project.projectDetails?.client ?? "",
      duration: project.projectDetails?.duration ?? "",
      squareMeters: project.projectDetails?.squareMeters ?? "",
      services: project.projectDetails?.services ?? "",
    },
    galleryImages: (project.galleryImages ?? []).map(({ galleryImage }) => ({
      id: galleryImage.id,
      image: galleryImage.url,
      alt: galleryImage.alt,
    })),
  };

  return (
    <>
      <div className="projects-details-area pt-100">
        <div className="container">
          <h1 className="projects-details-main-title">
            {portfolioDetailsInfo.title}
          </h1>
          {!!portfolioDetailsInfo.mainImage && (
            <div className="projects-details-image">
              <Image
                src={portfolioDetailsInfo.mainImage}
                alt={portfolioDetailsInfo.title || 'project main image'}
                width={900}
                height={530}
                quality={100}
              />
            </div>
          )}

          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div className="projects-details-desc">
                <span className="sub">CASE STUDY</span>
                <h2 style={{ color: "var(--whiteColor)" }}>
                  {portfolioDetailsInfo.title}
                </h2>

                {portfolioDetailsInfo.description.part1}

                {!!portfolioDetailsInfo.servicesCovered.length && (
                  <div className="box-content">
                    <h3>Особливості</h3>
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-md-6">
                        <ul className="list">
                          {portfolioDetailsInfo.servicesCovered
                            .slice(0, 5)
                            .map((item, index) => (
                              <li key={index}>
                                <Image
                                  src={"/images/projects-details/arrow.svg"}
                                  alt="arrow"
                                  width={28}
                                  height={10}
                                />
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <ul className="list">
                          {portfolioDetailsInfo.servicesCovered
                            .slice(5, 10)
                            .map((item, index) => (
                              <li key={index}>
                                <Image
                                  src={"/images/projects-details/arrow.svg"}
                                  alt="arrow"
                                  width={28}
                                  height={10}
                                />
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {portfolioDetailsInfo.description.part2}
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <Sidebar {...portfolioDetailsInfo.projectDetails} />
            </div>
          </div>
        </div>
      </div>

      <GalleryImage galleryImageData={portfolioDetailsInfo.galleryImages} />
    </>
  );
};

export default PortfolioDetailsContent;
