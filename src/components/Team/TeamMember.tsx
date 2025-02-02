"use client";

import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    id: "1",
    image: "/images/new-images/team/zhenya-lena.jpg",
    name: "Євген та Олена",
    designation: "Co-founders",
    socialLink: [
      // {
      //   id: "1",
      //   icon: "ri-facebook-line",
      //   link: "https://www.facebook.com/",
      // },
      // {
      //   id: "2",
      //   icon: "ri-instagram-line",
      //   link: "https://www.instagram.com/",
      // },
      // {
      //   id: "3",
      //   icon: "ri-twitter-line",
      //   link: "https://www.twitter.com/",
      // },
    ],
  },
  {
    id: "3",
    image: "/images/new-images/team/valeria.jpg",
    name: "Валерія",
    designation: "Дизайнер інтер'єрів",

    socialLink: [],
  },
  {
    id: "4",
    image: "/images/new-images/team/diana.jpg",
    name: "Діана",
    designation: "Дизайнер інтер'єрів",

    socialLink: [],
  },
  {
    id: "5",
    image: "/images/new-images/team/vlada.JPG",
    name: "Владислава",
    designation: "спеціаліст з маркетингових рішень",

    socialLink: [],
  },
];

const TeamMember: React.FC = () => {
  return (
    <>
      {teamMemberData && (
        <div className="team-area different-wrap-color with-margin-top pt-100 pb-75">
          <div className="container">
            <div className="section-title-wrap">
              <span>КОМАНДА</span>
              <h1 style={{color: 'var(--whiteColor)'}}>Наша команда професіоналів до Ваших послуг</h1>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-12">
                <div className="team-left-content">
                  {teamMemberData &&
                    teamMemberData.slice(0, 1).map((value, i) => (
                      <div className="team-card" key={i}>
                        <div className="team-image">
                          <Image
                            src={value.image}
                            alt="team"
                            width={790}
                            height={790}
                          />

                          <div className="content">
                            <h2>{value.name}</h2>
                            <span>{value.designation}</span>
                          </div>
                        </div>

                        {/*<ul className="team-social">*/}
                        {/*  {teamMemberData &&*/}
                        {/*    value.socialLink.map((value, i) => (*/}
                        {/*      <li key={i}>*/}
                        {/*        <Link*/}
                        {/*          href={value.link}*/}
                        {/*         target="_blank" rel="noopener noreferrer"*/}
                        {/*        >*/}
                        {/*          <i className={value.icon}></i>*/}
                        {/*        </Link>*/}
                        {/*      </li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="team-right-content">
                  <div className="row">
                    {teamMemberData &&
                      teamMemberData.slice(1, 50).map((value, i) => (
                        <div className="col-lg-6 col-md-6" key={i}>
                          <div className="team-card">
                            <div className="team-image">
                              <Image
                                src={value.image}
                                alt="team"
                                width={790}
                                height={790}
                              />
                              <div className="content">
                                <h2>{value.name}</h2>
                                <span>{value.designation}</span>
                              </div>
                            </div>

                            {/*<ul className="team-social">*/}
                            {/*  {teamMemberData &&*/}
                            {/*    value.socialLink.map((value, i) => (*/}
                            {/*      <li key={i}>*/}
                            {/*        <Link*/}
                            {/*          href="https://www.facebook.com/"*/}
                            {/*         target="_blank" rel="noopener noreferrer"*/}
                            {/*        >*/}
                            {/*          <i className={value.icon}></i>*/}
                            {/*        </Link>*/}
                            {/*      </li>*/}
                            {/*    ))}*/}
                            {/*</ul>*/}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMember;
