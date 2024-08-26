"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: "1",
    image: "/images/projects/projects-scroll-1.jpg",
    title: "Family Villa Village",
    tag: "NEW CASTLE, UK",
    introText:
      "We are specialized in the privates houses creation. Our architecture is an innovative and creative retranscription of the lifestyle and codes of the Arcachon basin.",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "2",
    image: "/images/projects/projects-scroll-2.jpg",
    title: "Tower House",
    tag: "Architecture",
    introText:
      "We are specialized in the privates houses creation. Our architecture is an innovative and creative retranscription of the lifestyle and codes of the Arcachon basin.",
    link: "/portfolio/portfolio-details",
  },
];

const ProjectsSlider: React.FC = () => {
  return (
    <>
      <div className="projects-scroll-area pb-100">
        <div className="container-fluid">
          <div className="section-title-wrap">
            <span>PROJECTS</span>
            <h2>Selected Projects That We really Want To Show You</h2>
          </div>

          {projectsData && (
            <Swiper
              autoHeight={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Pagination]}
              className="projects-scroll-slide"
            >
              {projectsData &&
                projectsData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="row align-items-center">
                      <div className="col-xl-4 col-lg-4">
                        <div className="projects-scroll-card">
                          <div className="image">
                            <Image
                              src={value.image}
                              alt="Project image"
                              width={970}
                              height={865}
                            />
                          </div>
                          <div className="content">
                            <h3>
                              <Link href={value.link}>{value.title}</Link>{" "}
                              <span>{value.tag}</span>
                            </h3>
                            <p>{value.introText}</p>
                            <Link href={value.link} className="projects-btn">
                              DISCOVER MORE
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-8 col-lg-8">
                        <div className="project-lg-img d-none d-lg-block">
                          <Image
                            src={value.image}
                            alt="Project image"
                            width={970}
                            height={865}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsSlider;
