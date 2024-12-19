"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

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
  {
    id: "4",
    image: "/images/blog/blog7.jpg",
    title: "From Blueprint to Reality: The Journey of Architecture",
    date: "Jul 16, 2023",
    link: "/single-blog/",
  },
  {
    id: "5",
    image: "/images/blog/blog8.jpg",
    title: "Small Space, Big Impact: Maximizing Design",
    date: "Jul 17, 2023",
    link: "/single-blog/",
  },
  {
    id: "6",
    image: "/images/blog/blog9.jpg",
    title: "From Dull to Dazzling: Traz Inspirational Design",
    date: "Jul 18, 2023",
    link: "/single-blog/",
  },
  {
    id: "7",
    image: "/images/blog/blog10.jpg",
    title: "The Power of Color: Traz Guide to Creating Vibrant",
    date: "Jul 19, 2023",
    link: "/single-blog/",
  },
  {
    id: "8",
    image: "/images/blog/blog11.jpg",
    title: "Effortless Elegance: Unveiling Traz Approach",
    date: "Jul 20, 2023",
    link: "/single-blog/",
  },
];

const BlogRightSidebar: React.FC = () => {
  return (
    <>
      <div className="blog-area wrap-style pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="section-title-wrap d-flex justify-content-between align-items-end">
                <div className="title">
                  <span>ARTICLES</span>
                  <h2>Read Our Latest Blog To Stay Updated Always</h2>
                </div>
              </div>

              {blogPostData && (
                <div className="row">
                  {blogPostData &&
                    blogPostData.map((value, i) => (
                      <div className="col-lg-12 col-md-12" key={i}>
                        <div className="blog-item">
                          <div className="image">
                            <Link href={value.link}>
                              <Image
                                src={value.image}
                                alt="image"
                                width={1230}
                                height={560}
                              />
                            </Link>
                          </div>
                          <div className="content wrap-color">
                            <span className="date">{value.date}</span>
                            <h3>
                              <Link href={value.link}>{value.title}</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="col-lg-4 col-md-12">
              {/* Sidebar */}
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSidebar;
