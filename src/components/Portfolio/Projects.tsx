"use client";

import React, { useState } from "react";
import ProjectsShortInfo from "./ProjectsShortInfo";
import { commercialProjects, livingProjects } from "@/data/projectsShortInfo";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (index: string) => {
    setActiveTab(index);
  };

  const data =
    activeTab === "commercial"
      ? commercialProjects
      : activeTab === "living"
      ? livingProjects
      : [...livingProjects, ...commercialProjects];

  return (
    <>
      <div className="projects-area without-wrap-border ptb-100">
        <div className="container">
          <div className="section-title-wrap d-flex d-md-block d-xl-flex align-items-end justify-content-between">
            <div className="title">
              <span>ПРОЄКТИ</span>
              <h2 style={{ color: "white" }}>Проєкти, якими ми пишаємось</h2>
            </div>

            <div className="tabs-nav">
              <button
                onClick={() => handleTabClick("all")}
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
              >
                Всі
              </button>
              <button
                onClick={() => handleTabClick("commercial")}
                className={`tab-btn ${
                  activeTab === "commercial" ? "active" : ""
                }`}
              >
                Комерційні
              </button>
              <button
                onClick={() => handleTabClick("living")}
                className={`tab-btn ${activeTab === "living" ? "active" : ""}`}
              >
                Житлові
              </button>
            </div>
          </div>

          <div>
            <ProjectsShortInfo data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
