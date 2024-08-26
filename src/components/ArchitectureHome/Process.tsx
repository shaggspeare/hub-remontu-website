"use client";

import React from "react";
import Image from "next/image";

const processData = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Align With Goals",
    text: "We are a leading architecture firm dedicated to creating designs.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Guide The Design",
    text: "We are a leading architecture firm dedicated to creating designs.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Digitally Build",
    text: "We are a leading architecture firm dedicated to creating designs.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Construct The Best",
    text: "We are a leading architecture firm dedicated to creating designs.",
    aosDelay: "400",
  },
];

const Process: React.FC = () => {
  return (
    <>
      <div className="process-area pt-100 pb-75">
        <div className="container">
          <div
            className="section-title d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2>
              <span>Process</span> That We Follow
            </h2>
          </div>

          {processData && (
            <div className="row justify-content-center">
              {processData &&
                processData.map((value, i) => (
                  <div
                    className="col-xl-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="true"
                    key={i}
                  >
                    <div className="process-card">
                      <div className="process-image">
                        <Image
                          src={value.image}
                          alt="image"
                          width={540}
                          height={310}
                        />
                        <span>{value.number}</span>
                      </div>
                      <div className="process-content">
                        <h3>{value.title}</h3>
                        <p>{value.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Process;
