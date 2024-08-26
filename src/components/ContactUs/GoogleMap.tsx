"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <div className="container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.85032094718!2d-79.6898681387421!3d43.71806559111187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1692186485963!5m2!1sen!2sbd"></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
