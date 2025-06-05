import React from "react";
import config from "@payload-config";
import { getPayload } from "payload";
import Tabs from "@/components/Tabs/Tabs";
import { ProjectShortInfo } from "@/types/project";

const ProjectsPage: React.FC = async () => {
  const payload = await getPayload({ config });

  // Fetch projects sorted by order field
  const { docs: projects } = await payload.find({
    collection: "projects",
    limit: 50,
    sort: "order", // Sort by order field ascending (lowest numbers first)
  });

  const projectsData: ProjectShortInfo[] = projects.map((project: any) => ({
    id: project.id,
    image: project.verticalImage,
    title: project.title,
    link: `/portfolio-details/${project.id}`,
    category: project.category,
    type: project.type || "implementation", // Default to 'implementation' for legacy projects
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
