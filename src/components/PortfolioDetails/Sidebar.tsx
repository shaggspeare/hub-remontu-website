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
            <span>CLIENT</span>
            <h4>SOLANA REAL ESTATE</h4>
          </li>
          <li>
            <span>DURATION</span>
            <h4>JUN 01, 2023 - JUL 18, 2023</h4>
          </li>
          <li>
            <span>BUDGET</span>
            <h4>$23,000 - $30,000</h4>
          </li>
          <li>
            <span>SERVICE</span>
            <h4>
              <Link href="/services">INTERIOR DESIGN</Link>
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
