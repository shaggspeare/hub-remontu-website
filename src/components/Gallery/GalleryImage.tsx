"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

interface Props {
  galleryImageData: { id: string; image: string }[];
}

const GalleryImage: React.FC<Props> = ({ galleryImageData }) => {
  if (!galleryImageData || galleryImageData.length === 0) {
    return (
      <div style={{padding:'5rem'}}>
        <div className="container">
          <p>Поки немає фото...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ptb-100">
      <div className="container">
        <div className="section-title-wrap p-0" style={{ maxWidth: "500px" }}>
          <h2 className="mb-2">Фото</h2>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{
            300: 1,
            576: 2,
            992: 3,
          }}
        >
          <Masonry gutter="30px">
            {galleryImageData.map((value) => (
              <div key={value.id}>
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
      </div>
    </div>
  );
};

export default GalleryImage;
