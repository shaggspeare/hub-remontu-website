"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { PortfolioDetailsData } from "@/components/PortfolioDetails/PortfolioDetailsContent";

interface Props {
  galleryImageData: PortfolioDetailsData[];
}

const GalleryImage: React.FC<Props> = ({ galleryImageData }) => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="section-title-wrap p-0" style={{ maxWidth: "500px" }}>
            <h2 className="mb-2">Фото</h2>
          </div>

          {galleryImageData && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                300: 1,
                576: 2,
                992: 3,
              }}
            >
              <Masonry gutter="30px">
                {galleryImageData &&
                  galleryImageData.map((value, i) => (
                    <div key={i}>
                      <Image
                        src={value.image}
                        alt="gallery image"
                        width={570}
                        height={720}
                      />
                    </div>
                  ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryImage;
