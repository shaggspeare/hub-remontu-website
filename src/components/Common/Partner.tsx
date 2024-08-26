"use client";

import React from "react";
import Image from "next/image";

const partnerData = [
  {
    id: "1",
    image: "/images/partner/partner1.png",
  },
  {
    id: "2",
    image: "/images/partner/partner2.png",
  },
  {
    id: "3",
    image: "/images/partner/partner3.png",
  },
  {
    id: "4",
    image: "/images/partner/partner4.png",
  },
  {
    id: "5",
    image: "/images/partner/partner5.png",
  },
  {
    id: "6",
    image: "/images/partner/partner6.png",
  },
];

const Partner: React.FC = () => {
  return (
    <>
      {partnerData && (
        <div className="partner-area pb-75">
          <div className="container-fluid">
            <div className="row g-0 justify-content-center align-items-center">
              {partnerData &&
                partnerData.map((value, i) => (
                  <div
                    className="col-lg-2 col-md-3 col-6 col-sm-4"
                    key={i}
                  >
                    <div className="partner-item text-center">
                      <Image
                        src={value.image}
                        alt="partner"
                        width={100}
                        height={26}
                      />
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

export default Partner;
