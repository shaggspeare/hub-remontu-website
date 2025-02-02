"use client";

import React from "react";
import Link from "next/link";
import CommentForm from "./CommentForm";
import Image from "next/image";

import blogImg from "../../../public/images/blog-details/blog-details1.jpg";
import blogImg2 from "../../../public/images/blog-details/blog-details2.jpg";
import blogImg3 from "../../../public/images/blog-details/blog-details3.jpg";
import arrowLeft from "../../../public/images/arrow-left.svg";
import arrowRight from "../../../public/images/arrow-right.svg";

const SingleBlogContent: React.FC = () => {
  return (
    <>
      <div className="blog-details-area pt-100 pb-100">
        <div className="container">
          <div className="blog-details-desc">
            <div className="title">
              <span>ARTICLES</span>
              <h2>
                From Concept to Construction: The Creative Journey of Traz In A
                Nutshell Architectural Marvels
              </h2>
              <ul className="meta">
                <li>
                  <Link href="/categories">Interior</Link>
                </li>
                <li>Jul 13, 2023</li>
              </ul>
            </div>

            <Image src={blogImg} alt="image" width={1320} height={650} />
            <p>
              Traz is a full-service design firm providing architecture,
              master planning, urban design, interior architecture, space
              planning and programming. Our portfolio of completed work includes
              highly acclaimed and award-winning projects for clients around the
              country.
            </p>
            <p>
              Traz is a full-service design firm providing architecture,
              master planning, urban design, interior architecture, space
              planning and programming. Our portfolio of completed work includes
              highly acclaimed and award-winning projects for clients around the
              country.
            </p>

            <h3>Urban Culture In The City</h3>

            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <ul className="list">
                  <li>Innovative Design</li>
                  <li>Highly Skilled Expertise</li>
                  <li>Furniture Design</li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul className="list">
                  <li>Sustainable Design Practices</li>
                  <li>A Client-Centric Approach</li>
                  <li>Landscape Design</li>
                </ul>
              </div>
            </div>

            <p>
              We design with people in mind and use every expertise at our
              disposal.Our practice connects communities and is committed to the
              stewardship of place, the environment.
            </p>

            <blockquote>
              <p>We Meet New People Everyday Coming With New Dreams & Hope.</p>
            </blockquote>

            <p>
              We design with people in mind and use every expertise at our
              disposal.Our practice connects communities and is committed to the
              stewardship of place, the environment.
            </p>

            <p>
              You don’t create unforgettable spaces all over the world with a
              single design tool. Our expertise in drawing people together is as
              broad as it is deep. It draws from a variety of disciplines, each
              one contributing to the bigger picture and sustainable growth.
              More than 3,000 projects fill our portfolio, but it’s the millions
              of people who experience them who matter most. We’ve grouped our
              work into five categories: places, venues, spaces, experiences.
            </p>

            <div className="bd-block-images">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="block">
                    <Image src={blogImg2} alt="image" width={800} height={680} />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="block">
                    <Image src={blogImg3} alt="image" width={800} height={680} />
                  </div>
                </div>
              </div>
            </div>

            <p>
              You don’t create unforgettable spaces all over the world with a
              single design tool. Our expertise in drawing people together is as
              broad as it is deep. It draws from a variety of disciplines, each
              one contributing to the bigger picture and sustainable growth.
              More than 3,000 projects fill our portfolio, but it’s the millions
              of people who experience them who matter most. We’ve grouped our
              work into five categories: places, venues, spaces, experiences.
            </p>

            <h3>Functional Architecture and Interior Design</h3>
            <p>
              Successful people do not see failures as failures. They see them
              as important learning lessons. Lessons that are capable of giving
              them insights to prevent such mistakes from happening again. By
              adopting this mindset of turning Explore the{" "}
              <b>city and new places.</b>
            </p>

            <p>
              We design with people in mind and use every expertise at our
              disposal.Our practice connects communities and is committed to the
              stewardship of place, the environment.
            </p>

            <ul className="bd-tags">
              <li>
                <span>TAGS:</span>
              </li>
              <li>
                <Link href="/categories">Exterior</Link>
              </li>
              <li>
                <Link href="/categories">Architectural Design</Link>
              </li>
              <li>
                <Link href="/categories">Interior</Link>
              </li>
            </ul>

            <div className="bd-previous-next-post">
              <div className="prev-and-next-title d-flex align-items-center justify-content-between">
                <Link href="#" className="prev">
                  <Image src={arrowLeft} alt="arrow-left" width={18} height={18} />
                  PREVIOUS ARTICLE
                </Link>
                <Link href="#" className="next">
                  NEXT ARTICLE
                  <Image src={arrowRight} alt="arrow-right" width={18} height={18} />
                </Link>
              </div>
            </div>

            {/* CommentForm */}
            <CommentForm />
          </div>
        </div>

        <ul className="bd-social">
          <li>
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-line"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-fill"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleBlogContent;
