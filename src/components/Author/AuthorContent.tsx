"use client";
  
import React from "react";
import Image from "next/image";
import Link from 'next/link';

import Author from '../../../public/images/team/team1.jpg'

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "ri-linkedin-line",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    icon: "ri-facebook-line",
    link: "https://www.facebook.com/",
  },
  {
    id: "3",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/",
  },
  {
    id: "4",
    icon: "ri-twitter-line",
    link: "https://www.twitter.com/",
  },
];

// Blog Post
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

const AuthorContent: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-75">
        <div className="container">
          <div className="author-content text-center">
            <Image src={Author} alt="Author" width={500} height={500} />
            
            <div className="content">
              <h3>Victor James</h3>
              <p>Admin</p>

              <p>We design with people in mind and use every expertise at our disposal.Our practice connects communities and is committed to the stewardship of place, the environment.</p>

              {socialLinksData && (
                <ul>
                  {socialLinksData &&
                    socialLinksData.map((value, i) => (
                      <li key={i}>
                        {/*<Link href={value.link}target="_blank" rel="noopener noreferrer">*/}
                        {/*  <i className={value.icon}></i>*/}
                        {/*</Link>*/}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        
          {blogPostData && (
            <div className="row justify-content-center">
              {blogPostData &&
                blogPostData.map((value, i) => (
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
                      <div className="content wrap-color">
                        <span className="date">{value.date}</span>
                        <h3>
                          {/*<Link href={value.link}>{value.title}</Link>*/}
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

export default AuthorContent;