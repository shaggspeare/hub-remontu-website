"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowRightIcon from "../../../public/images/arrow-right.svg";

const servicesData = [
  {
    id: "1",
    icon: "flaticon-measuring",
    title: "Urban Design",
    shortText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "2",
    icon: "flaticon-interior-design",
    title: "Architecture",
    shortText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "3",
    icon: "flaticon-mansory",
    title: "Interior Design",
    shortText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="services-wrap-area pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap d-flex justify-content-between align-items-end">
            <div className="title">
              <span>SERVICES</span>
              <h2>
                We are here to guide you from the beginning to the end of your
                project.
              </h2>
            </div>
            <div className="link-btn">
              <Link href="/services">VIEW ALL SERVICES</Link>
            </div>
          </div>

          {servicesData && (
            <div className="row justify-content-center">
              {servicesData &&
                servicesData.slice(0, 3).map((value, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="services-item">
                      <div className="icon">
                        <i className={value.icon}></i>
                      </div>
                      <h3>
                        <Link href={value.link}>{value.title}</Link>
                      </h3>
                      <p>{value.shortText}</p>

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

export default Services;
