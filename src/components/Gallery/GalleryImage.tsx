"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GALLERY_SKELETON_COUNT = 6;

const GallerySkeletonGrid: React.FC = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 50,
    }}
  >
    {Array.from({ length: GALLERY_SKELETON_COUNT }).map((_, index) => (
      <div key={index} className="gallery-image-skeleton" style={{ aspectRatio: "570 / 720" }} />
    ))}
  </div>
);

// Dynamically import Masonry components with SSR disabled
const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false, loading: () => <GallerySkeletonGrid /> },
);
const Masonry = dynamic(() => import("react-responsive-masonry"), {
  ssr: false,
});

interface Props {
  galleryImageData: { id: string; image: string; thumb: string; alt: string }[];
}

const GalleryImage: React.FC<Props> = ({ galleryImageData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImageIds, setLoadedImageIds] = useState<Record<string, boolean>>({});

  const markLoaded = (id: string) =>
    setLoadedImageIds((prev) => (prev[id] ? prev : { ...prev, [id]: true }));

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
          <h2 className="mb-2" style={{color: '#c0b6ad !important'}}>Фото</h2>
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
                style={{
                  cursor: "pointer",
                  position: "relative",
                  aspectRatio: "570 / 720",
                  overflow: "hidden",
                }}
                onClick={() => openLightbox(index)}
              >
                {!loadedImageIds[value.id] && (
                  <div className="gallery-image-skeleton" style={{ position: "absolute", inset: 0 }} />
                )}
                <Image
                  src={value.thumb}
                  alt={value.alt || "gallery image"}
                  width={570}
                  height={720}
                  quality={85}
                  priority={index < 3}
                  sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                  onLoad={() => markLoaded(value.id)}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    opacity: loadedImageIds[value.id] ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
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

      <style jsx global>{`
        .gallery-image-skeleton {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(
            90deg,
            rgba(192, 182, 173, 0.15) 25%,
            rgba(192, 182, 173, 0.3) 37%,
            rgba(192, 182, 173, 0.15) 63%
          );
          background-size: 400% 100%;
          animation: gallery-skeleton-shimmer 1.4s ease infinite;
        }

        @keyframes gallery-skeleton-shimmer {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryImage;
