"use client";

import React, { useState } from "react";
import ProjectsShortInfo from "@/components/Portfolio/ProjectsShortInfo";
import { ProjectShortInfo } from "@/types/project";

interface TabsProps {
  projectsData: ProjectShortInfo[];
}

type FilterType = "category" | "type";

interface Filter {
  id: string;
  label: string;
  type: FilterType;
  value: string;
}

const Tabs: React.FC<TabsProps> = ({ projectsData }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filters: Filter[] = [
    // Category filters
    {
      id: "commercial",
      label: "Комерційні",
      type: "category",
      value: "commercial",
    },
    { id: "living", label: "Житлові", type: "category", value: "living" },
    // Type filters
    { id: "design", label: "Дизайн-проект", type: "type", value: "design" },
    {
      id: "implementation",
      label: "Реалізація",
      type: "type",
      value: "implementation",
    },
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

    return projectsData.filter((project) => {
      // Group active filters by type
      const categoryFilters = activeFilters.filter(
        (filterId) =>
          filters.find((f) => f.id === filterId)?.type === "category",
      );
      const typeFilters = activeFilters.filter(
        (filterId) => filters.find((f) => f.id === filterId)?.type === "type",
      );

      // Check category match (OR logic within category filters)
      const categoryMatch =
        categoryFilters.length === 0 ||
        categoryFilters.some((filterId) => {
          const filter = filters.find((f) => f.id === filterId);
          return filter && project.category === filter.value;
        });

      // Check type match (OR logic within type filters)
      const typeMatch =
        typeFilters.length === 0 ||
        typeFilters.some((filterId) => {
          const filter = filters.find((f) => f.id === filterId);
          return filter && project.type === filter.value;
        });

      // Both category and type conditions must be satisfied (AND logic between filter types)
      return categoryMatch && typeMatch;
    });
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
