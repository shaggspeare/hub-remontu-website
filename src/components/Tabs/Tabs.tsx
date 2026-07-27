"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProjectsShortInfo from "@/components/Portfolio/ProjectsShortInfo";
import { ProjectShortInfo } from "@/types/project";

interface TabsProps {
  projectsData: ProjectShortInfo[];
}

type FilterGroup = "category" | "type";

interface Filter {
  id: string;
  label: string;
  value: string;
  group: FilterGroup;
}

const categoryFilters: Filter[] = [
  { id: "living", label: "Житлові", value: "living", group: "category" },
  {
    id: "commercial",
    label: "Комерційні",
    value: "commercial",
    group: "category",
  },
];

const typeFilters: Filter[] = [
  { id: "design", label: "Дизайн-проєкти", value: "design", group: "type" },
  {
    id: "implementation",
    label: "Реалізація",
    value: "implementation",
    group: "type",
  },
];

const filters: Filter[] = [...categoryFilters, ...typeFilters];

function filterIdsFromQuery(
  searchParams: ReturnType<typeof useSearchParams>,
): string[] {
  const ids: string[] = [];

  const category = searchParams.get("category");
  category?.split(",").forEach((value) => {
    const filter = categoryFilters.find((f) => f.value === value);
    if (filter) ids.push(filter.id);
  });

  const type = searchParams.get("type");
  type?.split(",").forEach((value) => {
    const filter = typeFilters.find((f) => f.value === value);
    if (filter) ids.push(filter.id);
  });

  return ids;
}

const Tabs: React.FC<TabsProps> = ({ projectsData }) => {
  const searchParams = useSearchParams();
  const initialFilters = useMemo(
    () => filterIdsFromQuery(searchParams),
    [searchParams],
  );
  const [activeFilters, setActiveFilters] = useState<string[]>(initialFilters);

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

    const activeByGroup = (group: FilterGroup) =>
      activeFilters
        .map((id) => filters.find((f) => f.id === id))
        .filter((f): f is Filter => !!f && f.group === group);

    const activeCategoryFilters = activeByGroup("category");
    const activeTypeFilters = activeByGroup("type");

    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategoryFilters.length === 0 ||
        activeCategoryFilters.some((f) => project.category === f.value);
      const matchesType =
        activeTypeFilters.length === 0 ||
        activeTypeFilters.some((f) => project.type === f.value);

      return matchesCategory && matchesType;
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
