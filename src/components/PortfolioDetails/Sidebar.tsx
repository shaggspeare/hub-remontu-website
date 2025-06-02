"use client";

import React from "react";

interface Props {
  client: string;
  duration: string;
  squareMeters: string;
  services: string;
}

const Sidebar: React.FC<Props> = ({
  client,
  duration,
  squareMeters,
  services,
}) => {
  return (
    <>
      <div className="projects-details-side">
        <h3 style={{ color: "var(--whiteColor)" }}>Деталі</h3>

        <ul className="list">
          <li>
            <span
              style={{
                color: "var(--primaryColor)",
                textTransform: "uppercase",
              }}
            >
              Клієнт(и)
            </span>
            <h4 style={{ color: "var(--whiteColor)" }}>{client}</h4>
          </li>

          {!!duration && (
            <li>
              <span
                style={{
                  color: "var(--primaryColor)",
                  textTransform: "uppercase",
                }}
              >
                Тривалість
              </span>
              <h4 style={{ color: "var(--whiteColor)" }}>{duration}</h4>
            </li>
          )}

          <li>
            <span
              style={{
                color: "var(--primaryColor)",
                textTransform: "uppercase",
              }}
            >
              Площа
            </span>
            <h4 style={{ color: "var(--whiteColor)" }}>{squareMeters}</h4>
          </li>
          {!!services.length && (
            <li>
              <span
                style={{
                  color: "var(--primaryColor)",
                  textTransform: "uppercase",
                }}
              >
                Що робили для клієнта
              </span>
              <h4 style={{ color: "var(--whiteColor)" }}>{services}</h4>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
