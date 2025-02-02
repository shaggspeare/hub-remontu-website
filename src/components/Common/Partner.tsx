"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const partnerData = [
  {
    id: "1",
    image: "/images/new-images/partners/1.png",
    link: "https://flugger.ua/",
  },
  {
    id: "2",
    image: "/images/new-images/partners/2.png",
    link: "https://wakewood.ua/",
  },
  {
    id: "3",
    image: "/images/new-images/partners/3.png",
    link: "https://portanova.com.ua/",
  },
  {
    id: "4",
    image: "/images/new-images/partners/4.png",
    link: "https://www.agromat.ua/",
  },

  {
    id: "5",
    image: "/images/new-images/partners/5.png",
    link: "https://danaprisdoors.com.ua/",
  },
  {
    id: "6",
    image: "/images/new-images/partners/6.png",
    link: "https://rodos.ua/ua",
  },

  {
    id: "7",
    image: "/images/new-images/partners/7.png",
    link: "https://agtplus.ua/",
  },
  {
    id: "8",
    image: "/images/new-images/partners/8.png",
    link: "https://viyar.ua/ua/",
  },
  {
    id: "9",
    image: "/images/new-images/partners/9.png",
    link: "https://pivduyma.ua/",
  },

  {
    id: "10",
    image: "/images/new-images/partners/10.png",
    link: "https://his.ua/",
  },
  {
    id: "11",
    image: "/images/new-images/partners/11.png",
    link: "https://frankof.com.ua/",
  },
  {
    id: "12",
    image: "/images/new-images/partners/12.png",
    link: "https://holz.ua/ua/",
  },
  {
    id: "13",
    image: "/images/new-images/partners/13.png",
    link: "https://leondesign.kyiv.ua/",
  },
  {
    id: "14",
    image: "/images/new-images/partners/14.png",
    link: "https://laterem.ua/ua/",
  },
];

const Partner: React.FC = () => {
  return (
    <div className="pt-100">
      {partnerData && (
        <div className="partner-area pb-75">
          <div className="container-fluid">
            <h2 style={{ color: "var(--whiteColor)", textAlign: "center" }}>
              Наші партнери
            </h2>
            <div className="row g-0 justify-content-center align-items-center">
              {partnerData &&
                partnerData.map((value, i) => (
                  <div className="col-lg-2 col-md-3 col-6 col-sm-4" key={i}>
                    <div className="partner-item text-center">
                      <Link href={value.link}>
                        <Image
                          className="image"
                          src={value.image}
                          alt="partner"
                          width={150}
                          height={26}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner;
