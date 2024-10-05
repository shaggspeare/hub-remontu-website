"use client";

import React from "react";
import Image from "next/image";

import overviewImg1 from "../../../public/images/new-images/past-projects/2k_start-3-min.png";
import overviewImg2 from "../../../public/images/new-images/past-projects/1k_central_park.png";

const Overview: React.FC = () => {
  return (
    <>
      <div className="overview-area">
        <div className="container-fluid">
          <div className="row g-3 justify-content-center">
            <div
              className="col-lg-6 col-md-6 pe-0"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="overview-card">
                <div
                  className="image"
                  style={{
                    width: "85%", // Full width for responsiveness
                    height: "400px", // Fixed height (adjust as needed)
                    overflow: "hidden", // Hide overflowing parts of the image
                    marginRight: "5px",
                  }}
                >
                  <Image
                    src={overviewImg1}
                    alt="overview"
                    layout="responsive"
                    width={1320}
                    height={780}
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <h3>Дизайн</h3>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 ps-0"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="overview-card">
                <div
                  className="image"
                  style={{
                    width: "85%",
                    height: "400px", // Same height as the first image container
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={overviewImg2}
                    alt="overview"
                    layout="responsive"
                    width={1320}
                    height={780}
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <h3>Реалізація</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
