"use client";

import React from "react";
import { useDocumentInfo } from "@payloadcms/ui";

const ViewOnSiteButton: React.FC = () => {
  const { id } = useDocumentInfo();

  const handleViewOnSite = () => {
    if (id) {
      const siteUrl = `https://hubremontu.ua/portfolio-details/${id}/`;
      window.open(siteUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Only show button if we have an ID (document is saved)
  if (!id) {
    return (
      <div style={{ padding: "16px", textAlign: "center", color: "#666" }}>
        Save the project to view it on site
      </div>
    );
  }

  return (
    <div style={{ padding: "16px" }}>
      <button
        onClick={handleViewOnSite}
        style={{
          width: "100%",
          padding: "12px 16px",
          backgroundColor: "rgb(235, 235, 235)",
          color: "#222222",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "rgb(235, 235, 235)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "rgb(235, 235, 235)";
        }}
      >
        🔗 View on Site
      </button>
    </div>
  );
};

export default ViewOnSiteButton;
