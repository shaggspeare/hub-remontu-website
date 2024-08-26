"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import galleryImg1 from "../../../public/images/gallery/gallery1.jpg";
import galleryImg2 from "../../../public/images/gallery/gallery2.jpg";
import galleryImg3 from "../../../public/images/gallery/gallery3.jpg";
import galleryImg4 from "../../../public/images/gallery/gallery4.jpg";
import galleryImg5 from "../../../public/images/gallery/gallery5.jpg";

const ProjectGallery: React.FC = () => {
  return (
    <>
      <div className="projects-gallery-area">
        <div className="container">
          <h2 className="title">Gallery Of This Project</h2>

          <Swiper
            spaceBetween={25}
            loop={true}
            autoHeight={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="projects-gallery-slide-swiper"
          >
            <SwiperSlide>
              <Image src={galleryImg1} alt="image" width={600} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg2} alt="image" width={600} height={630} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg3} alt="image" width={600} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg4} alt="image" width={600} height={630} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg5} alt="image" width={600} height={400} />
            </SwiperSlide>
            
            <SwiperSlide>
              <Image src={galleryImg1} alt="image" width={600} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg2} alt="image" width={600} height={630} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg3} alt="image" width={600} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg4} alt="image" width={600} height={630} />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={galleryImg5} alt="image" width={600} height={400} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
