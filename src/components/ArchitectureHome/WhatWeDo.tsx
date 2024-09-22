"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowRightIcon from "../../../public/images/arrow-right.svg";

const servicesData = [
  {
    id: "1",
    icon: "flaticon-interior-design",
    title: "Дизайн",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
    aosDelay: "100",
  },
  {
    id: "2",
    icon: "flaticon-mansory",
    title: "Ремонт",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
    aosDelay: "200",
  },
  {
    id: "3",
    icon: "flaticon-measuring",
    title: "Проектування",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
    aosDelay: "300",
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <>
      <div className="services-area pb-75">
        <div className="container">
          <div
            className="section-title d-flex justify-content-between align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2>
              Що <span>ми робимо</span> для Вас
            </h2>
            <Link href="/services">ПОДИВИТИСЬ ВСІ ПОСЛУГИ</Link>
          </div>

          {servicesData && (
            <div className="row g-0 justify-content-center">
              {servicesData &&
                servicesData.slice(0, 3).map((value, i) => (
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="true"
                    key={i}
                  >
                    <div className="services-card">
                      <div className="icon">
                        <i className={value.icon}></i>
                      </div>
                      <h3>
                        <Link href={value.link}>{value.title}</Link>
                      </h3>
                      <p>{value.text}</p>
                      <Link href={value.link} className="services-btn">
                        <Image src={arrowRightIcon} alt="arrow-right" width={18} height={18} />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
