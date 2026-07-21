"use client";

import React, { useState } from "react";
import ProjectsShortInfo from "@/components/Portfolio/ProjectsShortInfo";
import { ProjectShortInfo } from "@/types/project";

interface TabsProps {
  projectsData: ProjectShortInfo[];
}

interface Filter {
  id: string;
  label: string;
  value: string;
}

const Tabs: React.FC<TabsProps> = ({ projectsData }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filters: Filter[] = [
    { id: "design", label: "Дизайн-проєкти", value: "design" },
    { id: "implementation", label: "Реалізація", value: "implementation" },
  ];

  const handleFilterClick = (filterId: string) => {
    setActiveFilters((prev) => {
      if (prev.includes(filterId)) {
        // Remove filter if already active
        return prev.filter((id) => id !== filterId);
      } else {
        // Add filter if not active
        return [...prev, filterId];
      }
    });
  };

  const handleShowAll = () => {
    setActiveFilters([]);
  };

  const getFilteredData = () => {
    if (activeFilters.length === 0) {
      return projectsData;
    }

    // OR logic: show projects matching any of the active type filters
    return projectsData.filter((project) =>
      activeFilters.some((filterId) => {
        const filter = filters.find((f) => f.id === filterId);
        return filter && project.type === filter.value;
      }),
    );
  };

  const filteredData = getFilteredData();

  return (
    <>
      <div className="tabs-nav">
        <span>Фільтри: &nbsp;</span>
        <button
          onClick={handleShowAll}
          className={`tab-btn ${activeFilters.length === 0 ? "active" : ""}`}
        >
          Всі
        </button>

        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`tab-btn ${activeFilters.includes(filter.id) ? "active" : ""}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Optional: Show active filters */}
      {activeFilters.length > 0 && (
        <div
          className="active-filters"
          style={{ marginBottom: "20px", fontSize: "14px", color: "#666" }}
        >
          Активні фільтри:{" "}
          {activeFilters
            .map((filterId) => filters.find((f) => f.id === filterId)?.label)
            .join(", ")}
        </div>
      )}

      <ProjectsShortInfo data={filteredData} />
    </>
  );
};

export default Tabs;
