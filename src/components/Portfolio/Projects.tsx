"use client";

import React, { useState } from "react";
import AllProjects from "./AllProjects";
import ExteriorTabContent from "./ExteriorTabContent";
import InteriorTabContent from "./InteriorTabContent";
import IndustryTabContent from "./IndustryTabContent";
import UrbanTabContent from "./UrbanTabContent";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="projects-area without-wrap-border ptb-100">
        <div className="container">
          <div className="section-title-wrap d-flex d-md-block d-xl-flex align-items-end justify-content-between">
            <div className="title">
              <span>ПРОЕКТИ</span>
              <h2 style={{color: 'white'}}>Проекти, якими ми пишаємось</h2>
            </div>

            {/*<div className="tabs-nav">*/}
            {/*  <button*/}
            {/*    onClick={() => handleTabClick(0)}*/}
            {/*    className={`tab-btn ${activeTab === 0 ? "active" : ""}`}*/}
            {/*  >*/}
            {/*    All*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    onClick={() => handleTabClick(1)}*/}
            {/*    className={`tab-btn ${activeTab === 1 ? "active" : ""}`}*/}
            {/*  >*/}
            {/*    Exterior*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    onClick={() => handleTabClick(2)}*/}
            {/*    className={`tab-btn ${activeTab === 2 ? "active" : ""}`}*/}
            {/*  >*/}
            {/*    Interior*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    onClick={() => handleTabClick(3)}*/}
            {/*    className={`tab-btn ${activeTab === 3 ? "active" : ""}`}*/}
            {/*  >*/}
            {/*    Industry*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    onClick={() => handleTabClick(4)}*/}
            {/*    className={`tab-btn ${activeTab === 4 ? "active" : ""}`}*/}
            {/*  >*/}
            {/*    Urban*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>

          <div>
            <AllProjects />
            {/*{activeTab === 0 && <AllProjects />}*/}
            {/*{activeTab === 1 && <ExteriorTabContent />}*/}
            {/*{activeTab === 2 && <InteriorTabContent />}*/}
            {/*{activeTab === 3 && <IndustryTabContent />}*/}
            {/*{activeTab === 4 && <UrbanTabContent />}*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
