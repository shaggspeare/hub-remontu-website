"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const galleryImageData = [
  {
    id: "1",
    image: "/images/new-images/sample-project/1.jpg",
  },
  {
    id: "2",
    image: "/images/new-images/sample-project/2.jpg",
  },
  {
    id: "3",
    image: "/images/new-images/sample-project/3.jpg",
  },
  {
    id: "4",
    image: "/images/new-images/sample-project/4.jpg",
  },
  {
    id: "5",
    image: "/images/new-images/sample-project/5.jpg",
  },
  {
    id: "6",
    image: "/images/new-images/sample-project/6.jpg",
  },
  {
    id: "7",
    image: "/images/new-images/sample-project/7.jpg",
  },
  {
    id: "8",
    image: "/images/new-images/sample-project/8.jpg",
  },
  {
    id: "9",
    image: "/images/new-images/sample-project/9.jpg",
  },
  {
    id: "10",
    image: "/images/new-images/sample-project/10.jpg",
  },
  {
    id: "11",
    image: "/images/new-images/sample-project/11.jpg",
  },
  {
    id: "12",
    image: "/images/new-images/sample-project/12.jpg",
  },
  {
    id: "13",
    image: "/images/new-images/sample-project/13.jpg",
  },
  {
    id: "14",
    image: "/images/new-images/sample-project/14.jpg",
  },
  {
    id: "15",
    image: "/images/new-images/sample-project/15.jpg",
  },
  {
    id: "16",
    image: "/images/new-images/sample-project/16.jpg",
  },
  {
    id: "17",
    image: "/images/new-images/sample-project/17.jpg",
  },
  {
    id: "18",
    image: "/images/new-images/sample-project/18.jpg",
  },
  {
    id: "19",
    image: "/images/new-images/sample-project/19.jpg",
  },
  {
    id: "20",
    image: "/images/new-images/sample-project/20.jpg",
  },
  {
    id: "21",
    image: "/images/new-images/sample-project/21.jpg",
  },
  {
    id: "22",
    image: "/images/new-images/sample-project/22.jpg",
  },
];

const GalleryImage: React.FC = () => {
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
