"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";

const projectsData = [
  {
    id: "1",
    image: "/images/new-images/past-projects/2k-syretski-sady-min.png",
    title: "2-к квартира, 62 м2 у ЖК Сирецькі Сади",
    link: "/portfolio-details",
  },
  {
    id: "2",
    image: "/images/new-images/past-projects/3k_faynatown-min.png",
    title: "3-к квартира, 72 м2 у ЖК Файна Таун",
    link: "/portfolio-details",
  },
  {
    id: "3",
    image: "/images/new-images/past-projects/3k_galaktyka-min.png",
    title: "3-к квартира, 72 м2 у ЖК Галактика",
    link: "/portfolio-details",
  },
  {
    id: "4",
    image: "/images/new-images/past-projects/3k_trinity-min.png",
    title: "3-к квартира, 100 м2 у ЖК Triiinity",
    link: "/portfolio-details",
  },
  {
    id: "5",
    image: "/images/new-images/past-projects/3k_sanfran-min.png",
    title: "3-к квартира, 99 м2 у ЖК San Francisco Creative House",
    link: "/portfolio-details",
  },

  {
    id: "6",
    image: "/images/new-images/past-projects/2k_start-1-min.png",
    title: "2-к квартира, 59 м2 у ЖК Старт",
    link: "/portfolio-details",
  },
  {
    id: "7",
    image: "/images/new-images/past-projects/2k-start-2-min.png",
    title: "2-к квартира, 53 м2 у ЖК Старт",
    link: "/portfolio-details",
  },
  {
    id: "8",
    image: "/images/new-images/past-projects/2k_start-3-min.png",
    title: "2-к квартира, 80 м2 у ЖК Старт",
    link: "/portfolio-details",
  },
  {
    id: "9",
    image: "/images/new-images/past-projects/2k_great-min.png",
    title: "2-к квартира, 71 м2 у ЖК Great",
    link: "/portfolio-details",
  },
  {
    id: "10",
    image: "/images/new-images/past-projects/2k_dibrova-min.png",
    title: "2-к квартира, 72 м2 у ЖК Діброва Парк",
    link: "/portfolio-details",
  },
  {
    id: "11",
    image: "/images/new-images/past-projects/2k_campus-min.png",
    title: "2-к квартира, 70 м2 у ЖК Campus",
    link: "/portfolio-details",
  },
  {
    id: "12",
    image: "/images/new-images/past-projects/2lvl_zarichnyi-min.png",
    title: "2-рівнева квартира,140 м2 у ЖК Зарічний",
    link: "/portfolio-details",
  },
];

const AllProjects: React.FC = () => {
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
                          <Image
                            src={rightArrowIcon}
                            alt="arrow-right"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link style={{ color: "white" }} href={value.link}>
                          {value.title}
                        </Link>
                        {/*<span className="ms-2">{value.category}</span>*/}
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

export default AllProjects;
