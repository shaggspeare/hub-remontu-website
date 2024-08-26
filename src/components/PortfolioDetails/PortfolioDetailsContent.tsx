"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

import projectImg from "../../../public/images/projects-details/projects-details1.jpg";
import arrowIcon from "../../../public/images/projects-details/arrow.svg";

const PortfolioDetailsContent: React.FC = () => {
  return (
    <>
      <div className="projects-details-area pt-100">
        <div className="container">
          <div className="projects-details-image">
            <Image src={projectImg} alt="image" width={1320} height={530} />
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div className="projects-details-desc">
                <span className="sub">CASE STUDY</span>

                <h2>Solana Interior Design</h2>

                <p>
                  We are a leading architecture firm dedicated to creating
                  visionary designs that transcend expectations. With our team
                  of highly skilled architects and designers, we specialize in
                  crafting.
                </p>
                <p>
                  Traz is a full-service design firm providing architecture,
                  master planning, urban design, interior architecture, space
                  planning and programming. Our portfolio of completed work
                  includes highly acclaimed and award-winning projects for
                  clients around the country.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>

                <div className="box-content">
                  <h3>Services We Covered</h3>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                      <ul className="list">
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Innovative Design
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Highly Skilled Expertise
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Furniture Design
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <ul className="list">
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Sustainable Design Practices
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />A Client-Centric
                          Approach
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Landscape Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  We design with people in mind and use every expertise at our
                  disposal.Our practice connects communities and is committed to
                  the stewardship of place, the environment.
                </p>
                <p>
                  You do not create unforgettable spaces all over the world with
                  a single design tool. Our expertise in drawing people together
                  is as broad as it is deep. It draws from a variety of
                  disciplines, each one contributing to the bigger picture and
                  sustainable growth. More than 3,000 projects fill our
                  portfolio, but it the millions of people who experience them
                  who matter most. We have grouped our work into five
                  categories: places, venues, spaces, experiences.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              {/* Sidebar */}
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
