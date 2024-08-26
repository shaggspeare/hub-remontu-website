"use client";

import React from "react";
import Image from "next/image";

import overviewImg1 from "../../../public/images/overview/overview1.jpg";
import overviewImg2 from "../../../public/images/overview/overview2.jpg";

const Overview: React.FC = () => {
  return (
    <>
      <div className="overview-area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div 
              className="col-lg-6 col-md-6 pe-0"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="overview-card">
                <div className="image">
                  <Image src={overviewImg1} alt="overview" width={1320} height={780} />
                </div>
                <h3>
                  Urban <span>Architecture</span>
                </h3>
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
                <div className="image">
                  <Image src={overviewImg2} alt="overview" width={1320} height={780} />
                </div>
                <h3>
                  Home <span>Interior</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
