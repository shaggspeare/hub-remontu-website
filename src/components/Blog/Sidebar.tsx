"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowRight from "../../../public/images/arrow-right.svg";

// Blog post
const blogPostData = [
  {
    id: "1",
    image: "/images/blog/blog4.jpg",
    title: "How Traz Redefines the Built Environment",
    date: "Jul 13, 2023",
    link: "/single-blog/",
  },
  {
    id: "2",
    image: "/images/blog/blog5.jpg",
    title: "Architectural Delights: Uncovering Hidden Gems",
    date: "Jul 14, 2023",
    link: "/single-blog/",
  },
  {
    id: "3",
    image: "/images/blog/blog6.jpg",
    title: "The Art of Balancing form and Function in Design",
    date: "Jul 15, 2023",
    link: "/single-blog/",
  },
];

// Categories
const categoriesData = [
  {
    id: "1",
    title: "URBAN DESIGN",
    link: "/categories/",
  },
  {
    id: "2",
    title: "ARCHITECTURE",
    link: "/categories/",
  },
  {
    id: "3",
    title: "INTERIOR DESIGN",
    link: "/categories/",
  },
  {
    id: "4",
    title: "EXTERIOR DESIGN",
    link: "/categories/",
  },
  {
    id: "5",
    title: "INDUSTRIAL DESIGN",
    link: "/categories/",
  },
  {
    id: "6",
    title: "3D MODELLING",
    link: "/categories/",
  },
];

// Tags
const tagsData = [
  {
    id: "1",
    title: "Exterior",
    link: "/tags/",
  },
  {
    id: "2",
    title: "Architectural Design",
    link: "/tags/",
  },
  {
    id: "3",
    title: "Interior",
    link: "/tags/",
  },
  {
    id: "4",
    title: "Urban Design",
    link: "/tags/",
  },
  {
    id: "5",
    title: "Art",
    link: "/tags/",
  },
  {
    id: "6",
    title: "Industrial Design",
    link: "/tags/",
  },
  {
    id: "7",
    title: "Functional",
    link: "/tags/",
  },
];

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area">
        <div className="widget widget_search">
          <h3 className="widget-title">Search Article</h3>

          <form className="search-form">
            <input
              type="text"
              className="search-field"
              placeholder="Search Article"
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </form>
        </div>

        {blogPostData && (
          <div className="widget widget_traz_posts_thumb">
            <h3 className="widget-title">Popular Posts</h3>

            {blogPostData &&
              blogPostData.slice(0, 3).map((value, i) => (
                <article className="item" key={i}>
                  <Link href={value.link} className="thumb">
                    <span
                      className="fullimage"
                      style={{ backgroundImage: `url(${value.image})` }}
                    ></span>
                  </Link>
                  <div className="info">
                    <h4 className="title usmall">
                      <Link href={value.link}>{value.title}</Link>
                    </h4>
                    <span>{value.date}</span>
                  </div>
                </article>
              ))}
          </div>
        )}

        {categoriesData && (
          <div className="widget widget_categories">
            <h3 className="widget-title">Categories</h3>

            <ul>
              {categoriesData &&
                categoriesData.slice(0, 6).map((value, i) => (
                  <li key={i}>
                    <Link href={value.link}>{value.title}</Link>
                    <span>
                      <Image src={arrowRight} alt="arrow" width={18} height={18} />
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {tagsData && (
          <div className="widget widget_tag_cloud">
            <h3 className="widget-title">Popular Tags</h3>
            <div className="tagcloud">
              {tagsData &&
                tagsData.slice(0, 10).map((value, i) => (
                  <Link href={value.link} key={i}>
                    {value.title}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
