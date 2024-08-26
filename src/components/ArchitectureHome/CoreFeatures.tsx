"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import featureImg from "../../../public/images/features/wrap.png";
import arrowIcon from "../../../public/images/features/arrow.svg";
import architecturalShape from "../../../public/images/features/architectural-shape.png";

const CoreFeatures: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div 
                className="features-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h2>
                  Form & Function: <span>Crafting Exquisite Spaces</span> with
                  Flair Design
                </h2>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <div className="inner-box">
                      <div className="title">
                        <h3 className="counter">35</h3>
                        <span>
                          YEARS OF <b>EXPERIENCE</b>
                        </span>
                      </div>
                      <div className="wrap">
                        <Image src={featureImg} alt="image" width={161} height={231} />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-7">
                    <div className="inner-content">
                      <p>
                        We are a leading architecture firm dedicated to creating
                        visionary designs that transcend expectations. With our
                        team of highly skilled architects and designers, we
                        specialize in crafting.
                      </p>

                      <ul className="list">
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Innovative Design Approach
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Highly Skilled Expertise and Specialization
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />A client-centric
                          approach
                        </li>
                      </ul>

                      <div className="features-btn">
                        <Link href="#" className="default-btn">
                          Our Core Features
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div
                className="features-image"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
                style={{
                  backgroundImage: `url(/images/features/features1.jpg)`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="features-shape">
          <Image src={architecturalShape} alt="Architectural Shape" width={477} height={562} />
        </div>
      </div>
    </>
  );
};

export default CoreFeatures;
