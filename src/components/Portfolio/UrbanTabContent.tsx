"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";

const projectsData = [
  {
    id: "1",
    image: "/images/projects/projects3.jpg",
    title: "Triangle House",
    category: "Architecture",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "2",
    image: "/images/projects/projects4.jpg",
    title: "Glass Building",
    category: "Exterior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "3",
    image: "/images/projects/projects5.jpg",
    title: "Building Decor",
    category: "Exterior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "4",
    image: "/images/projects/projects6.jpg",
    title: "Museum",
    category: "Architecture",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "5",
    image: "/images/projects/projects1.jpg",
    title: "Tower House",
    category: "Architecture",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "6",
    image: "/images/projects/projects2.jpg",
    title: "Roof Top",
    category: "Exterior",
    link: "/portfolio/portfolio-details",
  },
];

const UrbanTabContent: React.FC = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {projectsData && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              300: 1,
              576: 2,
              992: 3,
            }}
          >
            <Masonry gutter="30px">
              {projectsData &&
                projectsData.map((value, i) => (
                  <div className="projects-item m-0" key={i}>
                    <div className="projects-image">
                      <Link href={value.link}>
                        <Image
                          src={value.image}
                          alt="image"
                          width={570}
                          height={720}
                        />
                      </Link>

                      <div className="icon">
                        <Link href={value.link}>
                          <Image src={rightArrowIcon} alt="arrow-right" width={24} height={24} />
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link style={{color: 'white'}} href={value.link}>{value.title}</Link>
                        <span className="ms-2">{value.category}</span>
                      </h3>
                    </div>
                  </div>
                ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </div>
    </>
  );
};

export default UrbanTabContent;
