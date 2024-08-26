"use client";

import React from "react";
import Image from "next/image";

import overviewImg1 from "../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../public/images/overview/overview4.jpg";

const Overview: React.FC = () => {
  return (
    <>
      <div className="overview-area wrap-color">
        <div className="container-fluid">
          <div className="overview-inner-area">
            <div className="row justify-content-center">
              <div
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <div className="overview-card">
                  <div className="image">
                    <Image src={overviewImg1} alt="image" width={1320} height={780} />
                  </div>
                  <h3>
                    Exterior <span>Architecture</span>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <div className="overview-card">
                  <div className="image">
                    <Image src={overviewImg2} alt="image" width={1320} height={780} />
                  </div>
                  <h3>
                    Interior <span>Home/Office</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
