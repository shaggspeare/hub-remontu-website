"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Dynamically import Masonry components with SSR disabled
const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false },
);
const Masonry = dynamic(() => import("react-responsive-masonry"), {
  ssr: false,
});

interface Props {
  galleryImageData: { id: string; image: string; alt: string }[];
}

const GalleryImage: React.FC<Props> = ({ galleryImageData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!galleryImageData || galleryImageData.length === 0) {
    return (
      <div style={{ padding: "5rem" }}>
        <div className="container">
          <p>Поки немає фото...</p>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <div className="container">
        <div className="section-title-wrap p-0" style={{ maxWidth: "500px" }}>
          <h2 className="mb-2">Фото</h2>
        </div>

        {/* Render Masonry layout */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            300: 1,
            576: 2,
            992: 3,
          }}
        >
          <Masonry gutter="50px">
            {galleryImageData.map((value, index) => (
              <div
                key={value.id}
                style={{ cursor: "pointer" }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={value.image}
                  alt={value.alt || "gallery image"}
                  width={570}
                  height={720}
                  quality={100}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Lightbox for image previews */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={galleryImageData.map((img) => ({ src: img.image }))}
          index={currentIndex}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }}
        />
      )}
    </div>
  );
};

export default GalleryImage;
