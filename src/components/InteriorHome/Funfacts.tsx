"use client";

import React from "react";

const funfactsData = [
  {
    id: "1",
    number: "30+",
    title: "YEARS OF EXPERIENCE",
  },
  {
    id: "2",
    number: "80%",
    title: "CLIENTS SATISFACTION",
  },
  {
    id: "3",
    number: "5460sqm",
    title: "SPACE INNOVATED",
  },
  {
    id: "4",
    number: "125+",
    title: "PROJECTS DONE",
  },
];

const Funfacts: React.FC = () => {
  return (
    <>
      {funfactsData && (
        <div className="funfacts-area pt-100 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              {funfactsData &&
                funfactsData.map((value, i) => (
                  <div className="col-lg-3 col-sm-6 col-6" key={i}>
                    <div className="funfacts-card">
                      <div className="d-flex align-items-center">
                        <h2>{value.number}</h2>
                      </div>
                      <p>{value.title}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Funfacts;
