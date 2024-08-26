"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about/about5.jpg";
import arrowIcon from "../../../public/images/about/arrow2.svg";
import videoThumb from "../../../public/images/about/about4.png";
import videoCircleImg from "../../../public/images/about/wrap.png";
import textShape from "../../../public/images/about/archi-text2.png";

import OurMissionAndVision from "./OurMissionAndVision";

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

      <div className="about-area pt-100">
        <div className="container">
          <div className="about-three-title">
            <span>ABOUT US</span>
            <h2>
              We Are <b>Traz.</b> We Create Unique And Sustainable Living
              Spaces, Designed For Sharing
            </h2>
          </div>

          <div className="about-image-three">
            <Image src={aboutImg} alt="image" width={1320} height={430} />
          </div>

          <div className="about-three-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-three-left-content">
                  <p className="mb-0">
                    We are leading architecture firm dedicated to creating
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
                      <Image src={arrowIcon} alt="arrow" width={28} height={10} /> A client-centric
                      approach for an architectural company
                    </li>
                    <li>
                      <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                      Sustainable Design Practices
                    </li>
                  </ul>

                  <div className="about-image-wrap">
                    <Image src={videoThumb} alt="image" width={1052} height={1120} />

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
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-three-right-content">
                  {/* OurMissionAndVision */}
                  <OurMissionAndVision />

                  <div className="about-wrap-content">
                    <h2>
                      Architecture & Interior Is Where We Belong, We Really Love
                      Our Job
                    </h2>
                    <p>
                      Traz is a full-service design firm providing
                      architecture, master planning, urban design, interior
                      architecture, space planning and programming. Our
                      portfolio of completed work includes highly acclaimed and
                      award-winning projects.
                    </p>
                    <p>
                      At Traz, we believe that architecture goes beyond mere
                      structures, it is an art form that shapes the way we live,
                      work, and interact with our surroundings. With a deep
                      understanding of the built environment and an unwavering
                      commitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-wrap-shape">
          <Image src={textShape} alt="image" width={768} height={140} />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
