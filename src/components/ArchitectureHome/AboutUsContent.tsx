"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowShape from "../../../public/images/about/arrow-shape.png";
import aboutImg2 from "../../../public/images/new-images/backgrounds/about-3.png";
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
                style={{
                  backgroundImage: `url(/images/new-images/backgrounds/about-1.png)`,
                }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="arrow-shape">
                  <Image
                    src={arrowShape}
                    alt="Shape"
                    width={182}
                    height={128}
                  />
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
                    Студія дизайнерського ремонту <br />
                    <span>HUB REMONTU</span>
                    <br /> Рішення, що відображають стиль життя
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="inner-image">
                      <Image
                        src={aboutImg2}
                        alt="about"
                        width={690}
                        height={590}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="inner-content">
                      <p>
                        Унікальні інтер’єри від ідеї до реалізації. Разом з нами
                        Ваш проєкт стане реальністю, а процес ремонту
                        перетвориться на приємне та комфортне втілення усіх
                        побажань.
                      </p>

                      <ul className="list">
                        <li>
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={28}
                            height={10}
                          />
                          Індивідуальне проектування
                        </li>
                        <li>
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={28}
                            height={10}
                          />
                          Ремонт
                        </li>
                        <li>
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={28}
                            height={10}
                          />
                          Меблювання
                        </li>
                      </ul>

                      <div className="about-btn">
                        <Link href="/about-us" className="default-btn">
                          Дізнатись більше про нас
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
