"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    id: "1",
    image: "/images/projects/projects7.jpg",
    title: "Refined Elegance",
    category: "Interior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "2",
    image: "/images/projects/projects8.jpg",
    title: "Tower House",
    category: "Architecture",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "3",
    image: "/images/projects/projects9.jpg",
    title: "House Renovation",
    category: "Interior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "4",
    image: "/images/projects/projects10.jpg",
    title: "Penthouse",
    category: "Architecture",
    link: "/portfolio/portfolio-details",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <div className="projects-area bg-wrap-with-black ptb-100">
        <div className="container">
          {projectsData && (
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(0, 2).map((value, i) => (
                      <div className="projects-item" key={i}>
                        <div className="projects-image">
                          <Link href={value.link}>
                            <Image
                              src={value.image}
                              alt="projects"
                              width={750}
                              height={950}
                            />
                          </Link>
                          <Link href={value.link} className="projects-btn">
                            SEE CASE STUDIES
                          </Link>
                        </div>
                        <div className="projects-content">
                          <h3>
                            <Link href={value.link}>{value.title}</Link> {" "}
                            <span>{value.category}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="section-title-wrap">
                  <span>PROJECTS</span>
                  <h2>Selected Projects That We Really Want To Show You</h2>
                </div>

                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(2, 4).map((value, i) => (
                      <div className="projects-item" key={i}>
                        <div className="projects-image">
                          <Link href={value.link}>
                            <Image
                              src={value.image}
                              alt="projects"
                              width={750}
                              height={950}
                            />
                          </Link>
                          <Link href={value.link} className="projects-btn">
                            SEE CASE STUDIES
                          </Link>
                        </div>
                        <div className="projects-content">
                          <h3>
                            <Link href={value.link}>{value.title}</Link> {" "}
                            <span>{value.category}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          <div className="projects-btn">
            <Link href="/portfolio">VIEW ALL PROJECTS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
