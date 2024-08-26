"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "../../../public/images/arrow-right.svg";

const servicesData = [
  {
    id: "1",
    icon: "flaticon-measuring",
    title: "Urban Design",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "2",
    icon: "flaticon-interior-design",
    title: "Architecture",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "3",
    icon: "flaticon-mansory",
    title: "Interior Design",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "4",
    icon: "flaticon-draws",
    title: "Exterior Design",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "5",
    icon: "flaticon-industrial-park",
    title: "Industrial Design",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "6",
    icon: "flaticon-money-icons",
    title: "3D Modelling",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
];

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="services-wrap-area without-bg-color pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span>SERVICES</span>
            <h2>
              We are here to guide you from the beginning to the end of your
              project.
            </h2>
          </div>

          {servicesData && (
            <div className="row justify-content-center">
              {servicesData &&
                servicesData.map((value, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="services-item">
                      <div className="icon">
                        <i className={value.icon}></i>
                      </div>
                      <h3>
                        <Link href={value.link}>{value.title}</Link>
                      </h3>
                      <p>{value.text}</p>
                      <Link href={value.link} className="services-btn">
                        <Image src={arrowIcon} alt="arrow-right" width={18} height={18} />
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

export default ServicesCard;
