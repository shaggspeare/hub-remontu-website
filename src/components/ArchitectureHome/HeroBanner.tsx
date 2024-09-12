"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import shapeImg from "../../../public/images/main-banner/shape.png";
import textShapeImg from "../../../public/images/main-banner/text.png";
import arrowRightIcon from "../../../public/images/main-banner/arrow-right.svg";

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/",
  },
  {
    id: "3",
    icon: "ri-twitter-line",
    link: "https://www.twitter.com/",
  },
];

const HeroBanner: React.FC = () => {
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

      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="main-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              Створимо простір, в якому <span>хочеться жити</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              Welcome to Esta Architects, where innovation meets elegance. We
              are a leading architecture firm dedicated to creating visionary
              designs that transcend expectations.
            </p>
            <div 
              className="banner-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Link href="/contact-us" className="default-btn">
                Замовити проект
              </Link>
            </div>
          </div>
        </div>
        
        <div
          className="main-banner-image"
          style={{ backgroundImage: `url(/images/main-banner/banner1.png)` }}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-once="false"
        ></div>
 
        <div className="main-banner-wrap-shape">
          <Image src={shapeImg} alt="Shape" width={502} height={287} />
        </div>

        <div className="main-banner-video">
          <Image src={textShapeImg} alt="Text Shape" width={182} height={182} />

          <div onClick={() => setToggler(!toggler)} className="video-btn">
            <i className="ri-play-fill"></i>
          </div>
        </div>
          
        {socialLinksData && (
          <ul className="main-banner-social">
            {socialLinksData &&
              socialLinksData.map((value, i) => (
                <li key={i}>
                  <a href={value.link} target="_blank">
                    <i className={value.icon}></i>
                  </a>
                </li>
              ))}
          </ul>
        )}

        <div className="main-banner-arrow">
          <Link href="/contact-us">
            <Image src={arrowRightIcon} alt="arrow right" width={24} height={24} />
          </Link>
        </div>

        <ul className="main-banner-info">
          <li>
            <span>CALL:</span>
            <a href="tel:3214264567">+321 426 4567</a>
          </li>
          <li>
            <span>MAIL:</span>
            <a href="mailto:trazteam@gmail.com">trazteam@gmail.com</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroBanner;
