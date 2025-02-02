"use client";

import React from "react";
import Image from "next/image";

import shapeImg from "../../../public/images/box-style-shape.png";

const QuoteText: React.FC = () => {
  return (
    <>
      <div className="box-style-area"  style={{marginBottom: '40px'}}>
        <div className="container-fluid">
          <div className="box-style-inner">
            <h2>
              Дім – це місце «сили», місце затишку та комфорту кожної людини, те
              місце, де можна сховатись від турбот, віднайти себе, обійняти
              близьку людину та побути на самоті з собою.
            </h2>
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
