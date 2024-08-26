"use client";

import React from "react"; 
import Image from "next/image";

import shapeImg from "../../../public/images/box-style-shape.png";

const QuoteText: React.FC = () => {
  return (
    <>
      <div className="box-style-area">
        <div className="container-fluid">
          <div className="box-style-inner">
            <h3>
              We Meet New People Everyday Coming With New Dreams & Hope Which We
              Try To Make Them True
            </h3>
            <div className="wrap-shape">
              <Image src={shapeImg} alt="image" width={260} height={276} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteText;
