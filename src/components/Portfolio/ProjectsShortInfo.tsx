"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";
import { ProjectShortInfo } from "@/types/project";
import { getProjectBrandLogo } from "@/utils/projectBrand";

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
        <Masonry gutter="50px">
          {data.map((project, index) => {
            const brandLogo = getProjectBrandLogo(project.type);
            const imageUrl =
              typeof project.image === "object" && project.image?.url
                ? project.image.url
                : typeof project.image === "string"
                ? project.image
                : null;
            const isPriority = index < 3;

            return (
              <div className="projects-item mx-0 my-2" key={project.id}>
                <div className="projects-image">
                  <div className="project-brand-badge">
                    <Image
                      src={brandLogo.src}
                      alt={brandLogo.alt}
                      width={56}
                      height={56}
                      quality={90}
                    />
                  </div>
                  <Link href={project.link}>
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={project.title}
                        width={570}
                        height={720}
                        quality={85}
                        priority={isPriority}
                        sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
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
                  {project.realizedLink && (
                    <Link
                      className="realized-project-btn"
                      href={project.realizedLink}
                    >
                      Переглянути вже готовий ремонт
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ProjectsShortInfo;
