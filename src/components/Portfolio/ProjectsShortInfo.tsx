"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";
import { ProjectShortInfo } from "@/data/projectsShortInfo";

interface IProps {
  data: ProjectShortInfo[];
}

const ProjectsShortInfo: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {data && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              300: 1,
              576: 2,
              992: 3,
            }}
          >
            <Masonry gutter="30px">
              {data &&
                data.map((value, i) => (
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
                        <Link
                          style={{ color: "white", marginBottom: 40 }}
                          href={value.link}
                        >
                          {value.title}
                        </Link>
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

export default ProjectsShortInfo;
