"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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
];

const BlogPost: React.FC = () => {
  return (
    <>
      <div className="blog-area pb-75">
        <div className="container">
          <div className="section-title-wrap d-flex justify-content-between align-items-end">
            <div className="title">
              <span>ARTICLES</span>
              <h2>Read Our Latest Blog To Stay Updated Always</h2>
            </div>
            <div className="link-btn">
              <Link href="/blog">VISIT BLOG PAGE</Link>
            </div>
          </div>

          {blogPostData && (
            <div className="row justify-content-center">
              {blogPostData &&
                blogPostData.slice(0, 4).map((value, i) => (
                  <div className="col-lg-6 col-md-12" key={i}>
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
                      <div className="content">
                        <span className="date">{value.date}</span>
                        <h3>
                          <a href={value.link}>{value.title}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
