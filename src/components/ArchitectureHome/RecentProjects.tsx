"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";

const projectsData = [
  {
    id: "1",
    image: "/images/new-images/past-projects/2k-syretski-sady-min.png",
    title: "2-к квартира, 62 м2 у ЖК Сирецькі Сади",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "2",
    image: "/images/new-images/past-projects/3k_faynatown-min.png",
    title: "3-к квартира, 72 м2 у ЖК Файна Таун",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "3",
    image: "/images/new-images/past-projects/3k_galaktyka-min.png",
    title: "3-к квартира, 72 м2 у ЖК Галактика",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "4",
    image: "/images/new-images/past-projects/3k_trinity-min.png",
    title: "3-к квартира, 100 м2 у ЖК Triiinity",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "5",
    image: "/images/new-images/past-projects/3k_sanfran-min.png",
    title: "3-к квартира, 99 м2 у ЖК San Francisco Creative House",
    link: "/portfolio/portfolio-details",
  },

  {
    id: "6",
    image: "/images/new-images/past-projects/2k_start-1-min.png",
    title: "2-к квартира, 59 м2 у ЖК Старт",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "7",
    image: "/images/new-images/past-projects/2k-start-2-min.png",
    title: "2-к квартира, 53 м2 у ЖК Старт",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "8",
    image: "/images/new-images/past-projects/2k_start-3-min.png",
    title: "2-к квартира, 80 м2 у ЖК Старт",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "9",
    image: "/images/new-images/past-projects/2k_great-min.png",
    title: "2-к квартира, 71 м2 у ЖК Great",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "10",
    image: "/images/new-images/past-projects/2k_dibrova-min.png",
    title: "2-к квартира, 72 м2 у ЖК Діброва Парк",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "11",
    image: "/images/new-images/past-projects/2k_campus-min.png",
    title: "2-к квартира, 70 м2 у ЖК Campus",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "12",
    image: "/images/new-images/past-projects/2lvl_zarichnyi-min.png",
    title: "2-рівнева квартира,140 м2 у ЖК Зарічний",
    link: "/portfolio/portfolio-details",
  },
];

const RecentProjects: React.FC = () => {
  return (
    <>
      <div className="projects-area ptb-100">
        <div className="container">
          <div className="section-title d-flex justify-content-center">
            <h2>
              Останні <span>Проекти</span>
            </h2>
          </div>

          {projectsData && (
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(0, 4).map((value, i) => (
                      <div className="projects-item" key={i}>
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
                            <Link href={value.link}>{value.title}</Link>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(4, 8).map((value, i) => (
                      <div className="projects-item" key={i}>
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
                            <Link href={value.link}>{value.title}</Link>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(8, 12).map((value, i) => (
                      <div className="projects-item" key={i}>
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
                            <Link href={value.link}>{value.title}</Link>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          <div className="projects-btn">
            <Link href="/portfolio">ДО ВСІХ ПРОЕКТІВ</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
