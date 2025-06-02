"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import GalleryImage from "@/components/Gallery/GalleryImage";
import { RichText } from "@payloadcms/richtext-lexical/react";
// Import your generated types - adjust the path as needed
import type { Project } from "@/payload-types";

interface PortfolioDetailsContentProps {
  project: Project;
}

const PortfolioDetailsContent: React.FC<PortfolioDetailsContentProps> = ({
  project,
}) => {
  if (!project) {
    return <div style={{ color: "#fff" }}>Project not found.</div>;
  }

  // Helper function to safely get image URL
  const getImageUrl = (image: any): string => {
    if (typeof image === "string") return image;
    return image?.url || "";
  };

  const portfolioDetailsInfo = {
    title: project.title || "",
    mainImage: getImageUrl(project.mainImage),
    description: {
      part1: project.description1,
      part2: project.description2,
    },
    servicesCovered: project.servicesCovered?.map((item) => item.service) || [],
    projectDetails: {
      client: project.projectDetails?.client ?? "",
      duration: project.projectDetails?.duration ?? "",
      squareMeters: project.projectDetails?.squareMeters ?? "",
      services: project.projectDetails?.services ?? "",
    },
    galleryImages: (project.galleryImages ?? []).map((galleryImage) => {
      // Handle both string and object types for images
      if (typeof galleryImage === "string") {
        return {
          id: galleryImage,
          image: galleryImage,
          alt: "",
        };
      }
      return {
        id: galleryImage.id,
        image: galleryImage.url || "",
        alt: galleryImage.alt || "",
      };
    }),
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
                alt={portfolioDetailsInfo.title || "project main image"}
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

                {/* Render Rich Text for description1 */}
                {portfolioDetailsInfo.description.part1 && (
                  <div
                    className="rich-text-content portfolio-details-text"
                  >
                    <RichText data={portfolioDetailsInfo.description.part1} />
                  </div>
                )}

                {!!portfolioDetailsInfo.servicesCovered.length && (
                  <div className="box-content">
                    <h3>Особливості</h3>
                    <div className="row justify-content-center">
                      <div
                        className={`${portfolioDetailsInfo.servicesCovered.length > 5 ? "col-lg-6 col-md-6" : ""}`}
                      >
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
                      {portfolioDetailsInfo.servicesCovered.length > 5 && (
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
                      )}
                    </div>
                  </div>
                )}

                {/* Render Rich Text for description2 */}
                {portfolioDetailsInfo.description.part2 && (
                  <div
                    className="rich-text-content portfolio-details-text"
                  >
                    <RichText data={portfolioDetailsInfo.description.part2} />
                  </div>
                )}
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
