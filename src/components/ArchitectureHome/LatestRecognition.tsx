"use client";

import React from "react";

const latestRecognitionData = [
  {
    id: "1",
    number: "1x",
    title: "Pritzker Architecture",
    date: "2023",
  },
  {
    id: "2",
    number: "2x",
    title: "Architecture MasterPrize",
    date: "2022, 2021",
  },
  {
    id: "3",
    number: "3x",
    title: "AIA Gold Medal",
    date: "2020, 2019",
  },
  {
    id: "4",
    number: "4x",
    title: "Ribba Architecture",
    date: "2017",
  },
];

const LatestRecognition: React.FC = () => {
  return (
    <>
      <div
        className="recognition-area ptb-100"
        style={{
          backgroundImage: `url(/images/recognition/recognition-bg.jpg)`,
        }}
      >
        <div className="container">
          <div
            className="recognition-content"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2>
              Latest <span>Recognition</span>
            </h2>

            {latestRecognitionData && (
              <ul className="list">
                {latestRecognitionData &&
                  latestRecognitionData.map((value, i) => (
                    <li
                      className="d-flex align-items-center justify-content-between"
                      key={i}
                    >
                      <h4>
                        <b>{value.number}</b> {value.title}
                      </h4>
                      <span>{value.date}</span>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestRecognition;
