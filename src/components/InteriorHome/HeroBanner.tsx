"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import bannerBgImg from "../../../public/images/main-banner/banner-bg.jpg";
import bannerBgImg2 from "../../../public/images/main-banner/banner-bg2.jpg";
import interiorImg from "../../../public/images/main-banner/interior.png";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner-animation-area">
        <Swiper 
          effect={"fade"} 
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, EffectFade]} 
          className="main-slider"
        >
          <SwiperSlide>
            <div className="main-slider-item text-center">
              <Image src={bannerBgImg} alt="banner" width={1920} height={740} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="main-slider-item text-center">
              <Image src={bannerBgImg2} alt="banner" width={1920} height={740} />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="main-banner-animation">
          <Image src={interiorImg} alt="interior" width={4520} height={740} />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
