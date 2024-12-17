"use client";

import React, { useState } from "react";
import ProjectsShortInfo from "@/components/Portfolio/ProjectsShortInfo";
import { ProjectShortInfo } from "@/components/Portfolio/Projects";

interface TabsProps {
  projectsData: ProjectShortInfo[];
}

const Tabs: React.FC<TabsProps> = ({ projectsData }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  const filteredData =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <>
      <div className="tabs-nav">
        <button
          onClick={() => handleTabClick("all")}
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
        >
          Всі
        </button>
        <button
          onClick={() => handleTabClick("commercial")}
          className={`tab-btn ${activeTab === "commercial" ? "active" : ""}`}
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

      <ProjectsShortInfo data={filteredData} />
    </>
  );
};

export default Tabs;
