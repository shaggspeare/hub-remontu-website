"use client";

import React, { useEffect, useRef, useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import textShapeImg from "../../../public/images/main-banner/text.png";
import heroPlaceholderImg from "../../../public/images/new-images/backgrounds/main-bg.png";

export interface HeroSocialLink {
  icon: string;
  link: string;
}

export interface HeroBannerProps {
  headingLine1?: string;
  headingOutline?: string;
  description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  videoUrl?: string;
  socialLinks?: HeroSocialLink[];
}

const defaultSocialLinks: HeroSocialLink[] = [
  {
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/profile.php?id=61555825405999",
  },
  {
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/hub_remontu",
  },
  {
    icon: "ri-telegram-line",
    link: "https://t.me/Design_interiors_HUB",
  },
];

const HeroBanner: React.FC<HeroBannerProps> = ({
  headingLine1 = "Дизайн зі змістом.",
  headingOutline = "Ремонт зі смаком.",
  description = "Вітаємо! Ми - студія дизайну інтер`єру та комплексного ремонту. У нас можна створити оселю мрії від її концепції до келиха шампанського на честь вашого новосілля!",
  ctaLabel = "Отримати консультацію",
  ctaLink = "/contact-us",
  videoUrl = "https://www.youtube.com/embed/qsWuXD7tRvc?si=GtQnpcuF1HDT57QZ",
  socialLinks,
}) => {
  const socialLinksData =
    socialLinks && socialLinks.length > 0 ? socialLinks : defaultSocialLinks;
  const [toggler, setToggler] = useState<boolean>(false);
  const headingTextRef = useRef<HTMLSpanElement>(null);
  const paragraphTextRef = useRef<HTMLSpanElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const computeTextEnd = () => {
      const rowLeft = bottomRowRef.current?.getBoundingClientRect().left;
      const rects = [
        ...Array.from(headingTextRef.current?.getClientRects() ?? []),
        ...Array.from(paragraphTextRef.current?.getClientRects() ?? []),
      ];
      if (rowLeft === undefined || rects.length === 0) return;

      const maxRight = Math.max(...Array.from(rects, (rect) => rect.right));
      document.documentElement.style.setProperty(
        "--hero-row-width",
        `${maxRight - rowLeft}px`,
      );
    };

    computeTextEnd();
    window.addEventListener("resize", computeTextEnd);
    document.fonts?.ready.then(computeTextEnd);

    return () => window.removeEventListener("resize", computeTextEnd);
  }, []);

  return (
    <>
      <FsLightbox toggler={toggler} sources={[videoUrl]} />

      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="main-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <span ref={headingTextRef}>
                {headingLine1} <br />
                <span className="h1-outline-text">{headingOutline}</span>
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <span ref={paragraphTextRef}>{description}</span>
            </p>
            <div
              className="banner-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Link href={ctaLink} className="default-btn">
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>

        <div
          className="main-banner-image main-banner-image--mobile"
          style={{
            backgroundImage: `url(/images/new-images/backgrounds/main-bg.png)`,
            backgroundPositionY: "bottom",
          }}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-once="false"
        ></div>

        <div className="hero-image-frame">
          <video
            className="hero-image-frame__video"
            src="/images/hero-animation/hero-video.mp4"
            poster={heroPlaceholderImg.src}
            autoPlay
            muted
            playsInline
            preload="auto"
            ref={(video) => {
              if (video) video.playbackRate = 0.75;
            }}
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.75;
            }}
            onEnded={(e) => {
              const video = e.currentTarget;
              video.pause();
              video.currentTime = video.duration;
            }}
          />
        </div>

        <div className="main-banner-bottom-row" ref={bottomRowRef}>
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

          <div className="main-banner-video">
            <Image
              src={textShapeImg}
              alt="Text Shape"
              width={182}
              height={182}
              priority
            />

            <div onClick={() => setToggler(!toggler)} className="video-btn">
              <i className="ri-play-fill"></i>
            </div>
          </div>
        </div>

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
        {/*    <Link href="tel:380683833888">+38(068) 383 38 38</Link>*/}
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
