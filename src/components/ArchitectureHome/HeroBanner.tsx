"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import shapeImg from "../../../public/images/main-banner/shape.png";
import textShapeImg from "../../../public/images/main-banner/text.png";
import arrowRightIcon from "../../../public/images/main-banner/arrow-right.svg";

const socialLinksData = [
  {
    id: "1",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/profile.php?id=61555825405999",
  },
  {
    id: "2",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/hub_remontu",
  },
  {
    id: "3",
    icon: "ri-telegram-line",
    link: "https://t.me/HUBremontu",
  },
];

const HeroBanner: React.FC = () => {
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/qsWuXD7tRvc?si=GtQnpcuF1HDT57QZ",
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
              Створимо простiр,
              <br /> в якому <span>хочеться жити</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              Вітаємо! Ми - студія дизайну інтер`єру та комплексного ремонту. У
              нас можна створити оселю мрії від її концепції до келиха
              шампанського на честь вашого новосілля!
            </p>
            <div
              className="banner-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Link href="/contact-us" className="default-btn">
                Замовити проєкт
              </Link>
            </div>
          </div>
        </div>

        <div
          className="main-banner-image"
          style={{
            backgroundImage: `url(/images/new-images/backgrounds/main-bg.png)`,
            backgroundPositionY: "bottom",
          }}
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
            <Image
              src={arrowRightIcon}
              alt="arrow right"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <ul className="main-banner-info">
          <li>
            <span>Дзвони: </span>
            <a href="tel:380683833838">+38(068) 383 38 38</a>
          </li>
          <li>
            <span>Пиши: </span>
            <a href="mailto:hubremontu@gmail.com">hubremontu@gmail.com</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroBanner;
