"use client";

import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    id: "1",
    image: "/images/team/team1.jpg",
    name: "David Off",
    designation: "CEO & Co-founder",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "2",
    image: "/images/team/team2.jpg",
    name: "Victor James",
    designation: "Architect",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "3",
    image: "/images/team/team3.jpg",
    name: "Walter White",
    designation: "Interior Designer",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "4",
    image: "/images/team/team4.jpg",
    name: "Jonathon",
    designation: "Exterior Designer",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "5",
    image: "/images/team/team5.jpg",
    name: "Angela",
    designation: "Marketing Lead",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "6",
    image: "/images/team/team6.jpg",
    name: "Jane Ronan",
    designation: "Architect",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "7",
    image: "/images/team/team7.jpg",
    name: "Jessy Pinkman",
    designation: "Interior Designer",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "8",
    image: "/images/team/team8.jpg",
    name: "Rotela Jennifer",
    designation: "Exterior Designer",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
  {
    id: "9",
    image: "/images/team/team9.jpg",
    name: "Sand Hooper",
    designation: "Marketing Lead",

    socialLink: [
      {
        id: "1",
        icon: "ri-facebook-line",
        link: "https://www.facebook.com/",
      },
      {
        id: "2",
        icon: "ri-instagram-line",
        link: "https://www.instagram.com/",
      },
      {
        id: "3",
        icon: "ri-twitter-line",
        link: "https://www.twitter.com/",
      },
    ],
  },
];

const TeamMember: React.FC = () => {
  return (
    <>
      {teamMemberData && (
        <div className="team-area different-wrap-color with-margin-top pt-100 pb-75">
          <div className="container">
            <div className="section-title-wrap">
              <span>OUR TEAM</span>
              <h2 style={{color: 'var(--whiteColor)'}}>We Have A Passionate Dedicated Team Behind Our Design Master Pieces</h2>
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
                            <h3>{value.name}</h3>
                            <span>{value.designation}</span>
                          </div>
                        </div>

                        <ul className="team-social">
                          {teamMemberData &&
                            value.socialLink.map((value, i) => (
                              <li key={i}>
                                <a
                                  href={value.link}
                                  target="_blank"
                                >
                                  <i className={value.icon}></i>
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="team-right-content">
                  <div className="row justify-content-center">
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
                                <h3>{value.name}</h3>
                                <span>{value.designation}</span>
                              </div>
                            </div>

                            <ul className="team-social">
                              {teamMemberData &&
                                value.socialLink.map((value, i) => (
                                  <li key={i}>
                                    <a
                                      href="https://www.facebook.com/"
                                      target="_blank"
                                    >
                                      <i className={value.icon}></i>
                                    </a>
                                  </li>
                                ))}
                            </ul>
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
