"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

export interface PortfolioDetailsData {
  id: string;
  image: string;
}

export interface PortfolioDetailsInfo {
  title: string;
  mainImage: string;
  description: {
    part1: React.ReactElement;
    part2?: React.ReactElement;
  };
  servicesCovered: string[];
  projectDetails: {
    client: string;
    duration: string;
    squareMeters: string;
    services: string;
  };
  galleryImages: PortfolioDetailsData[];
}

interface Props {
  portfolioDetailsInfo: PortfolioDetailsInfo;
}

const PortfolioDetailsContent: React.FC<Props> = ({ portfolioDetailsInfo }) => {
  return (
    <div className="projects-details-area pt-100">
      <div className="container">
        <h1 className="projects-details-main-title">
          {portfolioDetailsInfo.title}
        </h1>
        <div className="projects-details-image">
          <Image
            src={portfolioDetailsInfo.mainImage}
            alt={portfolioDetailsInfo.title}
            width={900}
            height={530}
            quality={100}
          />
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12">
            <div className="projects-details-desc">
              <span className="sub">CASE STUDY</span>
              <h2 style={{color: "var(--whiteColor)"}}>
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
            {/* Sidebar */}
            <Sidebar {...portfolioDetailsInfo.projectDetails} />
          </div>

          {/*<div className="projects-details-leave-quote">*/}
          {/*  <Link href="/request-quote" className="default-btn">*/}
          {/*    Хочу такий ремонт*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsContent;
