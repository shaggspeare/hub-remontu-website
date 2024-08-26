"use client";

import React, { useState } from "react";
import InteriorTabContent from "./InteriorTabContent";
import ExteriorTabContent from "./ExteriorTabContent";
import DecorationTabContent from "./DecorationTabContent";

const ServicesTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title-wrap">
            <span>SERVICES</span>
            <h2>
              We are here to guide you from the beginning to the end of your
              project.
            </h2>
          </div>

          <div className="services-list-tabs">
            <div className="row g-0 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <ul className="nav nav-tabs">
                  <li
                    onClick={() => handleTabClick(0)}
                    className={`nav-item ${activeTab === 0 ? "active" : ""}`}
                  >
                    <sup>01</sup> Interior
                  </li>

                  <li
                    onClick={() => handleTabClick(1)}
                    className={`nav-item ${activeTab === 1 ? "active" : ""}`}
                  >
                    <sup>02</sup> Exterior
                  </li>

                  <li
                    onClick={() => handleTabClick(2)}
                    className={`nav-item ${activeTab === 2 ? "active" : ""}`}
                  >
                    <sup>03</sup> Decoration
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-12">
                {activeTab === 0 && (
                  // InteriorTabContent
                  <InteriorTabContent />
                )}
                {activeTab === 1 && (
                  // ExteriorTabContent
                  <ExteriorTabContent />
                )}
                {activeTab === 2 && (
                  // DecorationTabContent
                  <DecorationTabContent />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesTab;
