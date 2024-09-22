"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import quoteIcon from "../../../public/images/client/quote.svg";
import shape1 from "../../../public/images/client/shape1.png";
import shape2 from "../../../public/images/client/shape2.png";

const clientsFeedbackData = [
  {
    id: "1",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.",
    image: "/images/client/user1.png",
    name: "Jonathon Ronan",
    designation: "CEO of HiBootstrap",
  },
  {
    id: "2",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.",
    image: "/images/client/user2.png",
    name: "Angela Carter",
    designation: "CEO of EnvyTheme",
  },
  {
    id: "3",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.",
    image: "/images/client/user3.png",
    name: "Skyler White",
    designation: "CEO of HiboTheme",
  },
  {
    id: "4",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.",
    image: "/images/client/user4.png",
    name: "Angela Carter",
    designation: "CEO of Abc",
  },
];

const ClientsFeedbackSlider: React.FC = () => {
  return (
    <>
      <div className="client-area ptb-100">
        <div className="container">
          <div className="section-title d-flex justify-content-center">
            <h2>
              <span>Наші відгуки </span> говорять за нас
            </h2>
          </div>

          {clientsFeedbackData && (
            <Swiper
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Pagination]}
              className="client-swiper"
            >
              {clientsFeedbackData &&
                clientsFeedbackData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="client-content">
                      <div className="icon">
                        <Image src={quoteIcon} alt="quote" width={56} height={56} />
                      </div>
                      <p>{value.feedbackText}</p>

                      <div className="client-information">
                        <div className="image">
                          <Image
                            src={value.image}
                            alt="image"
                            width={70}
                            height={70}
                          />
                        </div>
                        <div className="title">
                          <h3>{value.name}</h3>
                          <span>{value.designation}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>

        {/* Shape Images */}
        <div className="client-shape1">
          <Image src={shape1} alt="shape" width={88} height={125} />
        </div>
        <div className="client-shape2">
          <Image src={shape2} alt="shape" width={116} height={82} />
        </div>
      </div>
    </>
  );
};

export default ClientsFeedbackSlider;
