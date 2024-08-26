"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg3 from "../../../../public/images/services/services3.jpg";

const DecorationTabContent: React.FC = () => {
  return (
    <>
      <div className="tab-content">
        <div 
          className="services-tab-content"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-once="false"
        >
          <Image src={serviceImg3} alt="image" width={850} height={270} />
          <p>
            We are specialized in the privates houses creation. Our architecture
            is an innovative and creative retranscription of the lifestyle and
            codes of the Arcachon basin. We design houses that are integrated
            into their environment. We imagine for you a haven of peace.
          </p>
          <Link href="/services">VIEW ALL INTERIOR SERVICES</Link>
        </div>
      </div>
    </>
  );
};

export default DecorationTabContent;
