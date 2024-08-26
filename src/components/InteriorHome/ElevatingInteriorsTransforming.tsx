"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import elevatingImg from "../../../public/images/elevating.png";

const ElevatingInteriorsTransforming: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/sVi2pdF1aIc?si=wuP0-H9KuJnEk0Js",
        ]}
      />

      <div className="elevating-area ptb-100">
        <div className="container-fluid">
          <div className="elevating-content">
            <h2>Elevating Interiors: Transforming</h2>
            <h3>Spaces with Traz Design Magic</h3>

            <div className="elevating-video">
              <Image src={elevatingImg} alt="elevating" width={184} height={184} />

              <div
                className="video-btn text-decoration-none"
                onClick={() => setToggler(!toggler)}
              >
                <i className="ri-play-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElevatingInteriorsTransforming;
