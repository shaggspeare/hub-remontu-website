"use client";

import React from "react";
import Link from "next/link";
import ReactCompareImage from "react-compare-image";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="as-banner-area">
        <div className="container-fluid">
          <div className="as-banner-image">
            <ReactCompareImage
              leftImage="/images/main-banner/as-banner-after.jpg"
              rightImage="/images/main-banner/as-banner-before.jpg"
            />
          </div>

          <div 
            className="as-banner-content"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h1>
              Transforming Spaces with <b>Traz</b> Design Magic
            </h1>
          </div>

          <div className="as-banner-bottom-content d-flex align-items-center justify-content-between">
            <p>
              We build cities through a unique combination of engineering,
              construction and design.
            </p>
            <Link href="/portfolio">SEE CASE STUDIES</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
