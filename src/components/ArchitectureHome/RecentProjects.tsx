"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";
import { commercialProjects, livingProjects } from "@/data/projectsShortInfo";

const projectsData = [...livingProjects, ...commercialProjects];

const RecentProjects: React.FC = () => {
  return (
    <>
      <div className="projects-area ptb-100">
        <div className="container">
          <div className="section-title d-flex justify-content-center">
            <h2>
              Останні <span>Проєкти</span>
            </h2>
          </div>

          {projectsData && (
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(0, 3).map((value, i) => (
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
                    projectsData.slice(3, 6).map((value, i) => (
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
                    projectsData.slice(6, 9).map((value, i) => (
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
            <Link href="/portfolio">ДО ВСІХ ПРОЄКТІВ</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
