"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import arrowIcon from "../../../public/images/about/arrow2.svg";
import videoThumb from "../../../public/images/new-images/past-projects/2k_dibrova-min.png";
import videoCircleImg from "../../../public/images/main-banner/text.png";
import textShape from "../../../public/images/about/archi-text2.png";

import OurMissionAndVision from "./OurMissionAndVision";

const AboutUsContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/qsWuXD7tRvc?si=GtQnpcuF1HDT57QZ",
        ]}
      />

      <div className="about-area pt-100">
        <div className="container">
          <div className="about-three-title">
            <span>ПРО НАС</span>
            <h2 style={{ color: "var(--whiteColor)" }}>
              <b>HUB REMONTU.</b> Допоможемо створити та реалізуємо інтер’єр
              вашої мрії
            </h2>
          </div>

          <div className="about-image-three">
            <Image src={'/images/new-images/backgrounds/about-2.png'} alt="image" width={1320} height={430} />
          </div>

          <div className="about-three-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-three-left-content">
                  <p className="mb-0">
                    З нами Ви отримуєте сервіс, якість та повну турботу про
                    кожну деталь Вашого ремонту. Комплексний підхід,
                    вузькопрофільні спеціалісти та професійний досвід допоможуть
                    реалізувати всі Ваші побажання в реальність.
                  </p>

                  <ul className="list">
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Уточнимо всі деталі
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Проконтролюємо абсолютно всі процеси
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />{" "}
                      Надамо повну та прозору звітність
                    </li>
                  </ul>

                  <div className="about-image-wrap">
                    <Image
                      src={videoThumb}
                      alt="image"
                      width={1052}
                      height={1120}
                      style={{filter: 'brightness(50%)'}}
                    />

                    <div className="wrap-video">
                      <Image
                        src={videoCircleImg}
                        alt="image"
                        width={184}
                        height={184}
                      />

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
                  <OurMissionAndVision />

                  <div className="about-wrap-content">
                    <h2 style={{ color: "var(--whiteColor)" }}>
                      Задоволені клієнти – найкраща реклама
                    </h2>
                    <p>
                      Абсолютно всі організаційні питання вашого ремонту
                      закриває наша команда, Вам не потрібно нагадувати нам про
                      терміни, перевіряти роботу майстрів, чи приймати доставку
                      матеріалів на об’єкт, чи постійно тримати в голові якісь
                      деталі вашого проекту– ми потурбуємось про все,
                      проконтролюємо абсолютно всі процеси, надамо повну та
                      прозору звітність, уточнимо всі деталі, та будемо
                      пам’ятати про все.
                    </p>
                    <p>
                      Наша відвертість, щирість та прозорість – це запорука
                      плідної співпраці та крутого результату.
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
