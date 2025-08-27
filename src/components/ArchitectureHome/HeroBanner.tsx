"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import textShapeImg from "../../../public/images/main-banner/text.png";

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
    link: "https://t.me/Hub_remontu",
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
              Дизайн у подарунок при замовленні
              <span>
                {" "}
                ремонту під ключ{" "}
                <Image
                    className="main-banner-content__gift-img"
                  src="data:image/png;base64,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"
                  alt="gift"
                  height={50}
                  width={50}
                />
              </span>
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
                Отримати консультацію
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
                  <Link
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={value.icon}></i>
                  </Link>
                </li>
              ))}
          </ul>
        )}

        {/*<div className="main-banner-arrow">*/}
        {/*  <Link href="/contact-us">*/}
        {/*    <Image*/}
        {/*      src={arrowRightIcon}*/}
        {/*      alt="arrow right"*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*    />*/}
        {/*  </Link>*/}
        {/*</div>*/}

        {/*<ul className="main-banner-info">*/}
        {/*  <li>*/}
        {/*    <span>Дзвони: </span>*/}
        {/*    <Link href="tel:380683833838">+38(068) 383 38 38</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <span>Пиши: </span>*/}
        {/*    <Link href="mailto:hubremontu@gmail.com">hubremontu@gmail.com</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </>
  );
};

export default HeroBanner;
