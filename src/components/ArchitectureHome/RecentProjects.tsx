import React from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@payload-config";
import { getPayload } from "payload";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";

export interface ProjectShortInfo {
  id: string;
  image?: any;
  title: string;
  link: string;
  category: string;
}

const RecentProjects: React.FC = async () => {
  const payload = await getPayload({ config });

  // Fetch projects sorted by order, limit to display only recent ones
  const { docs: projects } = await payload.find({
    collection: "projects",
    sort: "order", // Sort by order field
    limit: 9, // Limit to 9 projects for the 3x3 grid
  });

  const projectsData: ProjectShortInfo[] = projects.map((project) => {
    return {
      id: project.id,
      image: project.verticalImage,
      title: project.title,
      link: `/portfolio-details/${project.id}`,
      category: project.category,
    };
  });

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
              {/* First Column: Projects 0-2 */}
              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData.slice(0, 3).map((value, i) => (
                    <div className="projects-item" key={i}>
                      <div className="projects-image">
                        <Link href={value.link}>
                          {value.image &&
                          typeof value.image !== "string" &&
                          "url" in value.image ? (
                            <Image
                              src={value.image.url || ""}
                              alt={value.image.alt || "Image"}
                              width={570}
                              height={720}
                            />
                          ) : null}
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

              {/* Second Column: Projects 3-5 */}
              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData.slice(3, 6).map((value, i) => (
                    <div className="projects-item" key={i}>
                      <div className="projects-image">
                        <Link href={value.link}>
                          {value.image &&
                          typeof value.image !== "string" &&
                          "url" in value.image ? (
                            <Image
                              src={value.image.url || ""}
                              alt={value.image.alt || "Image"}
                              width={570}
                              height={720}
                            />
                          ) : null}
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

              {/* Third Column: Projects 6-8 */}
              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData.slice(6, 9).map((value, i) => (
                    <div className="projects-item" key={i}>
                      <div className="projects-image">
                        <Link href={value.link}>
                          {value.image &&
                          typeof value.image !== "string" &&
                          "url" in value.image ? (
                            <Image
                              src={value.image.url || ""}
                              alt={value.image.alt || "Image"}
                              width={570}
                              height={720}
                            />
                          ) : null}
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
