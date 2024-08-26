"use client";

import React from "react";
import Link from "next/link";

interface PageBannerTitleProps {
  title: string;
  homeText: string;
  homeUrl: string;
}

const PageTitle: React.FC<PageBannerTitleProps> = ({
  title,
  homeText,
  homeUrl,
}) => {
  return (
    <div className="page-banner-area">
      <div className="container-fluid">
        <div className="page-banner-inner">
          <ul className="list text-uppercase">
            <li>
              <Link href={homeUrl} className="text-black hover:text-[#717FF8]">
                {homeText}
              </Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
