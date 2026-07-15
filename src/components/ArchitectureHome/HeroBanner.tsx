"use client";

import React, { useEffect, useRef, useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import textShapeImg from "../../../public/images/main-banner/text.png";
import heroPlaceholderImg from "../../../public/images/new-images/backgrounds/main-bg.png";

const heroFrames = Array.from(
  { length: 14 },
  (_, i) => `/images/hero-animation/${String(i + 1).padStart(2, "0")}.jpg`,
);

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
    link: "https://t.me/Design_interiors_HUB",
  },
];

const HeroBanner: React.FC = () => {
  const [toggler, setToggler] = useState<boolean>(false);
  const [scrollStarted, setScrollStarted] = useState(false);
  const scrollPinRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLImageElement | null)[]>([]);
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

  const updateFramesRef = useRef<() => void>(() => {});

  useEffect(() => {
    const section = scrollPinRef.current;
    if (!section) return;

    let ticking = false;

    const updateFrames = () => {
      const rect = section.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, scrollableHeight > 0 ? -rect.top / scrollableHeight : 0),
      );

      const activeIndex = Math.round(progress * (heroFrames.length - 1));

      frameRefs.current.forEach((frame, index) => {
        if (!frame) return;
        frame.style.opacity = index === activeIndex ? "1" : "0";
      });

      ticking = false;
    };

    updateFramesRef.current = updateFrames;

    const onScroll = () => {
      setScrollStarted((started) => started || true);

      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateFrames);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateFrames);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateFrames);
    };
  }, []);

  useEffect(() => {
    if (scrollStarted) updateFramesRef.current();
  }, [scrollStarted]);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/qsWuXD7tRvc?si=GtQnpcuF1HDT57QZ",
        ]}
      />

      <div className="hero-scroll-pin" ref={scrollPinRef}>
        <div className="main-banner-area main-banner-area--pinned">
          <div className="container-fluid">
            <div className="main-banner-content">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <span ref={headingTextRef}>
                  Дизайн зі змістом. <br />
                  <span className="h1-outline-text">Ремонт зі смаком.</span>
                </span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <span ref={paragraphTextRef}>
                  Вітаємо! Ми - студія дизайну інтер`єру та комплексного
                  ремонту. У нас можна створити оселю мрії від її концепції до
                  келиха шампанського на честь вашого новосілля!
                </span>
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
            <Image
              src={heroPlaceholderImg}
              alt=""
              fill
              priority
              quality={75}
              sizes="50vw"
              className="hero-image-frame__img"
              style={{ objectFit: "cover" }}
            />

            {scrollStarted &&
              heroFrames.map((src, index) => (
                <Image
                  key={src}
                  ref={(el) => {
                    frameRefs.current[index] = el;
                  }}
                  src={src}
                  alt=""
                  fill
                  priority={index === 0}
                  quality={75}
                  sizes="50vw"
                  className="hero-image-frame__img"
                  style={{ objectFit: "cover", opacity: index === 0 ? 1 : 0 }}
                />
              ))}
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
      </div>
    </>
  );
};

export default HeroBanner;
