"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";
import { ProjectShortInfo } from "@/components/Portfolio/Projects";

// Dynamically import Masonry components with SSR disabled
const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false },
);
const Masonry = dynamic(() => import("react-responsive-masonry"), {
  ssr: false,
});

interface ProjectsShortInfoProps {
  data: ProjectShortInfo[];
}

const ProjectsShortInfo: React.FC<ProjectsShortInfoProps> = ({ data }) => {
  return (
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          300: 1,
          576: 2,
          992: 3,
        }}
      >
        <Masonry gutter="30px">
          {data.map((project) => (
            <div className="projects-item mx-0 my-2" key={project.id}>
              <div className="projects-image">
                <Link href={project.link}>
                  {/* If project.image is a Payload Media object, it might have a `.url` or `.filename` property */}
                  {typeof project.image === "object" && project.image?.url ? (
                    <Image
                      src={project.image.url}
                      alt={project.title}
                      width={570}
                      height={720}
                    />
                  ) : typeof project.image === "string" ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={570}
                      height={720}
                    />
                  ) : (
                    <div
                      style={{
                        width: 570,
                        height: 720,
                        backgroundColor: "#ccc",
                      }}
                    ></div>
                  )}
                </Link>

                <div className="icon">
                  <Link href={project.link}>
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
                    href={project.link}
                  >
                    {project.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ProjectsShortInfo;
