"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/about/about4.png";
import videoCircleImg from "../../../public/images/about/wrap.png";
import arrowIcon from "../../../public/images/about/arrow2.svg";

const AboutUsContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/sVi2pdF1aIc?si=wuP0-H9KuJnEk0Js",
        ]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image-two"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Image src={aboutImg} alt="image" width={1052} height={1120} />

                <div className="wrap-video">
                  <Image src={videoCircleImg} alt="image" width={184} height={184} />

                  <div
                    className="video-btn text-decoration-none"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="ri-play-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-two-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <span>ABOUT US</span>
                <h2>
                  We Create Unique And Sustainable Living Spaces, Designed For
                  Sharing
                </h2>
                <p>
                  We are a leading architecture firm dedicated to creating
                  visionary designs that transcend expectations. With our team
                  of highly skilled architects and designers, we specialize in
                  crafting.
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
    </>
  );
};

export default AboutUsContent;
