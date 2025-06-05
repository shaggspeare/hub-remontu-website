"use client";

import React, { useState, useEffect } from "react";
import { useField } from "@payloadcms/ui";

interface Project {
  id: string;
  title: string;
  order: number;
}

const ProjectOrder: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const { value, setValue } = useField<number>({ path: "order" });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects?sort=order&limit=100");
      const data = await response.json();
      setProjects(data.docs || []);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProjectOrder = async (projectId: string, newOrder: number) => {
    try {
      await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order: newOrder }),
      });
    } catch (error) {
      console.error("Failed to update project order:", error);
    }
  };

  const handleOrderChange = (direction: "up" | "down") => {
    const currentProject = projects.find((p) => p.order === value);
    if (!currentProject) return;

    const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
    const currentIndex = sortedProjects.findIndex(
      (p) => p.id === currentProject.id,
    );

    if (direction === "up" && currentIndex > 0) {
      const targetProject = sortedProjects[currentIndex - 1];
      const newOrder = targetProject.order;

      // Swap orders
      updateProjectOrder(currentProject.id, newOrder);
      updateProjectOrder(targetProject.id, value);
      setValue(newOrder);

      // Update local state
      setProjects((prev) =>
        prev.map((p) => {
          if (p.id === currentProject.id) return { ...p, order: newOrder };
          if (p.id === targetProject.id) return { ...p, order: value };
          return p;
        }),
      );
    } else if (
      direction === "down" &&
      currentIndex < sortedProjects.length - 1
    ) {
      const targetProject = sortedProjects[currentIndex + 1];
      const newOrder = targetProject.order;

      // Swap orders
      updateProjectOrder(currentProject.id, newOrder);
      updateProjectOrder(targetProject.id, value);
      setValue(newOrder);

      // Update local state
      setProjects((prev) =>
        prev.map((p) => {
          if (p.id === currentProject.id) return { ...p, order: newOrder };
          if (p.id === targetProject.id) return { ...p, order: value };
          return p;
        }),
      );
    }
  };

  if (loading) {
    return (
      <div
        style={{
          padding: "20px",
          color: "#9D9A97",
          fontSize: "var(--fontSize, 16px)",
          backgroundColor: "#24231F",
        }}
      >
        Завантаження проектів...
      </div>
    );
  }

  const currentProject = projects.find((p) => p.order === value);
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = sortedProjects.findIndex((p) => p.order === value);

  return (
    <div
      style={{
        backgroundColor: "#24231F",
        padding: "40px",
        marginBottom: "25px",
        border: "1px dashed #44433F",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <h4
        style={{
          color: "#E1DBD6",
          fontSize: "24px",
          fontWeight: "400",
          marginBottom: "30px",
        }}
      >
        Управління порядком проектів
      </h4>

      {currentProject && (
        <div
          style={{
            backgroundColor: "#161512",
            padding: "30px",
            marginBottom: "30px",
            border: "1px dashed #5F5F5F",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ marginBottom: "25px" }}>
            <p
              style={{
                color: "#DEDEDE",
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "15px",
              }}
            >
              <span style={{ color: "var(--primaryColor, #BA8D6D)" }}>
                Поточний проект:
              </span>{" "}
              {currentProject.title}
            </p>
            <p
              style={{
                color: "#B7B3AF",
                fontSize: "15px",
                marginBottom: "0",
              }}
            >
              <span style={{ color: "var(--primaryColor, #BA8D6D)" }}>
                Позиція:
              </span>{" "}
              {currentIndex + 1} з {projects.length}
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={() => handleOrderChange("up")}
              disabled={currentIndex === 0}
              style={{
                padding: "15px 30px",
                background:
                  currentIndex === 0
                    ? "#3A3835"
                    : "linear-gradient(135deg, #D8B798 0%, #BA8D6D 100%)",
                color: currentIndex === 0 ? "#7C7772" : "#ffffff",
                border: "none",
                fontSize: "15px",
                fontWeight: "500",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                transition: "var(--transition, .6s)",
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.background = "#161512";
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #D8B798 0%, #BA8D6D 100%)";
                }
              }}
            >
              ↑ Перемістити вгору
            </button>

            <button
              type="button"
              onClick={() => handleOrderChange("down")}
              disabled={currentIndex === sortedProjects.length - 1}
              style={{
                padding: "15px 30px",
                background:
                  currentIndex === sortedProjects.length - 1
                    ? "#3A3835"
                    : "linear-gradient(135deg, #D8B798 0%, #BA8D6D 100%)",
                color:
                  currentIndex === sortedProjects.length - 1
                    ? "#7C7772"
                    : "#ffffff",
                border: "none",
                fontSize: "15px",
                fontWeight: "500",
                cursor:
                  currentIndex === sortedProjects.length - 1
                    ? "not-allowed"
                    : "pointer",
                transition: "var(--transition, .6s)",
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== sortedProjects.length - 1) {
                  e.currentTarget.style.background = "#161512";
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== sortedProjects.length - 1) {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #D8B798 0%, #BA8D6D 100%)";
                }
              }}
            >
              ↓ Перемістити вниз
            </button>
          </div>
        </div>
      )}

      <div>
        <h5
          style={{
            color: "#E1DBD6",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "25px",
            paddingBottom: "15px",
            borderBottom: "1px dashed #5F5F5F",
          }}
        >
          Усі проекти (впорядковані):
        </h5>

        <div
          style={{
            backgroundColor: "#161512",
            border: "1px dashed #44433F",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          <ol
            style={{
              padding: "20px 40px",
              margin: "0",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            {sortedProjects.map((project, index) => (
              <li
                key={project.id}
                style={{
                  padding: "15px 20px",
                  marginBottom: "10px",
                  backgroundColor:
                    project.order === value
                      ? "rgba(186, 141, 109, 0.15)"
                      : "transparent",
                  fontWeight: project.order === value ? "500" : "400",
                  color: project.order === value ? "#DEDEDE" : "#9D9A97",
                  borderLeft:
                    project.order === value
                      ? "3px solid var(--primaryColor, #BA8D6D)"
                      : "3px solid transparent",
                  transition: "var(--transition, .6s)",
                  borderBottom:
                    index < sortedProjects.length - 1
                      ? "1px dashed #44433F"
                      : "none",
                }}
              >
                <span
                  style={{
                    color: project.order === value ? "#DEDEDE" : "#B7B3AF",
                  }}
                >
                  {project.title}
                </span>
                <span
                  style={{
                    color: "var(--primaryColor, #BA8D6D)",
                    fontSize: "14px",
                    fontWeight: "400",
                    marginLeft: "15px",
                    opacity: "0.8",
                  }}
                >
                  (Порядок: {project.order})
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Decorative shape similar to your dark sections */}
      <div
        style={{
          position: "absolute",
          right: "-2px",
          bottom: "-2px",
          zIndex: -1,
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(186, 141, 109, 0.1) 0%, rgba(186, 141, 109, 0.05) 100%)",
          clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
        }}
      />
    </div>
  );
};

export default ProjectOrder;
