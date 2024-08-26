"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowShape from "../../../public/images/about/arrow-shape.png";
import aboutImg2 from "../../../public/images/about/about2.jpg";
import archiTextImg from "../../../public/images/about/archi-text.png";
import arrowIcon from "../../../public/images/about/arrow.svg";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="about-image-one"
                style={{ backgroundImage: `url(/images/about/about1.jpg)` }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="arrow-shape">
                  <Image src={arrowShape} alt="Shape" width={182} height={128} />
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div
                className="about-one-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="title">
                  <h2>
                    Who We Are: Leading <span>Architectural Agency</span> Who
                    Create Unique Living Spaces
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="inner-image">
                      <Image src={aboutImg2} alt="about" width={690} height={590} />
                    </div>
                  </div>

                  <div className="col-lg-7">
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
                          approach for an architectural company
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Sustainable Design Practices
                        </li>
                      </ul>

                      <div className="about-btn">
                        <Link href="/about-us" className="default-btn">
                          Know More About Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text-wrap">
          <Image src={archiTextImg} alt="image" width={766} height={157} />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
