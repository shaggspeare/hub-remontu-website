"use client";
  
import React from "react"; 
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const galleryImageData = [
  {
    id: "1",
    image: "/images/projects/projects1.jpg",
  },
  {
    id: "2",
    image: "/images/projects/projects2.jpg",
  },
  {
    id: "3",
    image: "/images/projects/projects3.jpg",
  },
  {
    id: "4",
    image: "/images/projects/projects4.jpg",
  },
  {
    id: "5",
    image: "/images/projects/projects5.jpg",
  },
  {
    id: "6",
    image: "/images/projects/projects6.jpg",
  },
  {
    id: "7",
    image: "/images/projects/projects7.jpg",
  },
  {
    id: "8",
    image: "/images/projects/projects8.jpg",
  },
  {
    id: "9",
    image: "/images/projects/projects9.jpg",
  },
  {
    id: "10",
    image: "/images/projects/projects10.jpg",
  },
  {
    id: "11",
    image: "/images/projects/projects11.jpg",
  },
  {
    id: "12",
    image: "/images/projects/projects12.jpg",
  },
  {
    id: "13",
    image: "/images/projects/projects13.jpg",
  },
  {
    id: "14",
    image: "/images/projects/projects14.jpg",
  },
  {
    id: "15",
    image: "/images/projects/projects15.jpg",
  },
];

const GalleryImage: React.FC = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="section-title-wrap p-0" style={{ maxWidth: "500px" }}>
            <h2 className="mb-2">Gallery</h2>
            <p>
              We are a leading architecture firm dedicated to creating visionary
              designs that transcend expectations.
            </p>
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