"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.279193313059!2d30.597484590571558!3d50.412067253905256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd0a960b8621%3A0x6b5a45d78f181de2!2z0JzQsNGI0LjQvdC90LDRjyDRiNGC0YPQutCw0YLRg9GA0LrQsCDQutCy0LDRgNGC0LjRgCDQuCDQtNC-0LzQvtCy!5e0!3m2!1sru!2sus!4v1727521538583!5m2!1sru!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
