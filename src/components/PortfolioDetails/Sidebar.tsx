"use client";

import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="projects-details-side">
        <h3>Project Details</h3>

        <ul className="list">
          <li>
            <span style={{ color: "var(--whiteColor)" }}>CLIENT</span>
            <h4 style={{ color: "var(--whiteColor)" }}>SOLANA REAL ESTATE</h4>
          </li>
          <li>
            <span style={{ color: "var(--whiteColor)" }}>DURATION</span>
            <h4 style={{ color: "var(--whiteColor)" }}>
              JUN 01, 2023 - JUL 18, 2023
            </h4>
          </li>
          <li>
            <span style={{ color: "var(--whiteColor)" }}>BUDGET</span>
            <h4 style={{ color: "var(--whiteColor)" }}>$23,000 - $30,000</h4>
          </li>
          <li>
            <span style={{ color: "var(--whiteColor)" }}>SERVICE</span>
            <h4 style={{ color: "var(--whiteColor)" }}>
              <h4 style={{ color: "var(--whiteColor)" }}>INTERIOR DESIGN</h4>
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
