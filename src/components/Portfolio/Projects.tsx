import React from "react";
import config from "@payload-config";
import { getPayload } from "payload";
import Tabs from "@/components/Tabs/Tabs";

export interface ProjectShortInfo {
  id: string;
  image?: any; // or use { url?: string } if your Media type includes a `url` field
  title: string;
  link: string;
  category: string;
}

const ProjectsPage: React.FC = async () => {
  const payload = await getPayload({ config });

  const { docs: projects } = await payload.find({
    collection: "projects",
    limit: 50,
  });

  const projectsData: ProjectShortInfo[] = projects.map((project: any) => ({
    id: project.id,
    image: project.verticalImage,
    title: project.title,
    link: `/portfolio-details/${project.id}`,
    category: project.category,
  }));

  return (
    <div className="projects-area without-wrap-border ptb-100">
      <div className="container">
        <div className="section-title-wrap d-flex d-md-block d-xl-flex align-items-end justify-content-between">
          <div className="title">
            <span>ПРОЄКТИ</span>
            <h1 style={{ color: "white" }}>Проєкти, якими ми пишаємось</h1>
          </div>
        </div>
        <Tabs projectsData={projectsData} />
      </div>
    </div>
  );
};

export default ProjectsPage;
