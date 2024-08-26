"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "../../../public/images/arrow-right.svg";

const servicesData = [
  {
    id: "1",
    title: "URBAN DESIGN",
    link: "/services/service-details",
  },
  {
    id: "2",
    title: "ARCHITECHTURE",
    link: "/services/service-details",
  },
  {
    id: "3",
    title: "INTERIOR DESIGN",
    link: "/services/service-details",
  },
  {
    id: "4",
    title: "EXTERIOR DESIGN",
    link: "/services/service-details",
  },
  {
    id: "5",
    title: "INDUSTRIAL DESIGN",
    link: "/services/service-details",
  },
  {
    id: "6",
    title: "3D MODELLING",
    link: "/services/service-details",
  },
];

const Sidebar: React.FC = () => {
  return (
    <>
      {servicesData && (
        <ul className="services-details-info-side">
          {servicesData &&
            servicesData.slice(0, 10).map((value, i) => (
              <li
                className="d-flex align-items-center justify-content-between"
                key={i}
              >
                <Link href={value.link}>{value.title}</Link>
                <Link href={value.link}>
                  <Image src={arrowIcon} alt="arrow-right" width={18} height={18} />
                </Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
