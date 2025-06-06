"use client";

import React, { useState, useEffect } from "react";
import { useField } from "@payloadcms/ui";

interface Project {
  id: string;
  title: string;
  order: number;
  verticalImage?:
    | {
        url?: string;
        alt?: string;
      }
    | string;
}

const ProjectOrder: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

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

  // Helper function to get image URL
  const getImageUrl = (image: Project["verticalImage"]): string => {
    if (!image) return "";
    if (typeof image === "string") return image;
    return image.url || "";
  };

  // Helper function to get image alt text
  const getImageAlt = (image: Project["verticalImage"]): string => {
    if (!image) return "";
    if (typeof image === "string") return "";
    return image.alt || "";
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h4
          style={{
            color: "#E1DBD6",
            fontSize: "24px",
            fontWeight: "400",
            margin: "0",
          }}
        >
          Управління порядком проектів
        </h4>

        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            background: "transparent",
            border: "1px solid #44433F",
            color: "#9D9A97",
            padding: "8px 12px",
            fontSize: "14px",
            cursor: "pointer",
            transition: "var(--transition, .6s)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--primaryColor, #BA8D6D)";
            e.currentTarget.style.borderColor = "var(--primaryColor, #BA8D6D)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#9D9A97";
            e.currentTarget.style.borderColor = "#44433F";
          }}
        >
          <span>{isCollapsed ? "Розгорнути" : "Згорнути"}</span>
          <span
            style={{
              transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease",
              fontSize: "12px",
            }}
          >
            ▼
          </span>
        </button>
      </div>

      {/* Show current project info even when collapsed */}
      {currentProject && (
        <div
          style={{
            backgroundColor: "#161512",
            padding: "20px 30px",
            marginBottom: isCollapsed ? "0" : "30px",
            border: "1px dashed #5F5F5F",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Current project thumbnail */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "4px",
                overflow: "hidden",
                border: "2px solid var(--primaryColor, #BA8D6D)",
                flexShrink: 0,
              }}
            >
              {getImageUrl(currentProject.verticalImage) ? (
                <img
                  src={getImageUrl(currentProject.verticalImage)}
                  alt={getImageAlt(currentProject.verticalImage)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#3A3835",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7C7772",
                    fontSize: "12px",
                  }}
                >
                  No Image
                </div>
              )}
            </div>

            <div>
              <span
                style={{
                  color: "var(--primaryColor, #BA8D6D)",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Поточний проект:
              </span>
              <p
                style={{
                  color: "#DEDEDE",
                  fontSize: "16px",
                  fontWeight: "500",
                  margin: "5px 0 0 0",
                }}
              >
                {currentProject.title}
              </p>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <span
              style={{
                color: "var(--primaryColor, #BA8D6D)",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Позиція:
            </span>
            <p
              style={{
                color: "#B7B3AF",
                fontSize: "16px",
                margin: "5px 0 0 0",
              }}
            >
              {currentIndex + 1} з {projects.length}
            </p>
          </div>
        </div>
      )}

      {!isCollapsed && (
        <>
          {/* Action buttons section when expanded */}
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
              <h5
                style={{
                  color: "#E1DBD6",
                  fontSize: "18px",
                  fontWeight: "400",
                  marginBottom: "20px",
                }}
              >
                Дії з проектом:
              </h5>

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

          {/* Projects list section with thumbnails */}
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
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              <ol
                style={{
                  padding: "20px",
                  margin: "0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  listStyle: "none",
                  counterReset: "project-counter",
                }}
              >
                {sortedProjects.map((project, index) => (
                  <li
                    key={project.id}
                    style={{
                      padding: "15px 20px",
                      marginBottom: "15px",
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
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      counterIncrement: "project-counter",
                      position: "relative",
                    }}
                  >
                    {/* Project number */}
                    <div
                      style={{
                        minWidth: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor:
                          project.order === value
                            ? "var(--primaryColor, #BA8D6D)"
                            : "#3A3835",
                        color: project.order === value ? "#ffffff" : "#9D9A97",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: "500",
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Project thumbnail */}
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "4px",
                        overflow: "hidden",
                        border:
                          project.order === value
                            ? "2px solid var(--primaryColor, #BA8D6D)"
                            : "1px solid #44433F",
                        flexShrink: 0,
                      }}
                    >
                      {getImageUrl(project.verticalImage) ? (
                        <img
                          src={getImageUrl(project.verticalImage)}
                          alt={getImageAlt(project.verticalImage)}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#3A3835",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#7C7772",
                            fontSize: "10px",
                          }}
                        >
                          📷
                        </div>
                      )}
                    </div>

                    {/* Project info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          color:
                            project.order === value ? "#DEDEDE" : "#B7B3AF",
                          fontSize: "15px",
                          fontWeight: project.order === value ? "500" : "400",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {project.title}
                      </div>
                      <div
                        style={{
                          color: "var(--primaryColor, #BA8D6D)",
                          fontSize: "13px",
                          fontWeight: "400",
                          opacity: "0.8",
                          marginTop: "2px",
                        }}
                      >
                        Порядок: {project.order}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </>
      )}

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
