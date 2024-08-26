"use client";

import React from "react";
import Image from "next/image";

import recognitionImg from "../../../public/images/recognition/recognition.jpg";
import shape from "../../../public/images/recognition/shape.png";
import shape2 from "../../../public/images/features/wrap.png";

const recognitionData = [
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
      <div className="recognition-wrap-area pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="recognition-image">
                <Image src={recognitionImg} alt="recognition" width={1320} height={360} />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="recognition-content wrap-style">
                <span className="sub">AWARDS</span>
                <h2>Latest Recognition</h2>

                {recognitionData && (
                  <ul className="list">
                    {recognitionData &&
                      recognitionData.map((value, i) => (
                        <li
                          className="d-flex align-items-center justify-content-between"
                          key={i}
                        >
                          <span>{value.date}</span>
                          <h4>
                            <b>{value.number}</b> {value.title}
                          </h4>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="recognition-right-content">
                <Image src={shape} alt="shape" width={804} height={606} />

                <div className="awards-box">
                  <h3 className="counter">21</h3>
                  <span>
                    AWARDS IN <b>TOTAL</b>
                  </span>
                </div>

                <div className="experience-box">
                  <h3 className="counter">35</h3>
                  <span>
                    YEARS OF <b>EXPERIENCE</b>
                  </span>

                  <div className="wrap">
                    <Image src={shape2} alt="image" width={160} height={230} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestRecognition;
