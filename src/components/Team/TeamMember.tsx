"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Type definitions for the team member data from Payload CMS
interface Media {
  id: string;
  url: string;
  alt?: string;
  filename: string;
}

interface SocialLink {
  platform:
    | "linkedin"
    | "twitter"
    | "instagram"
    | "facebook"
    | "github"
    | "website"
    | "other";
  url: string;
  customPlatformName?: string;
}

interface TeamMemberData {
  id: string;
  name: string;
  designation: string;
  image?: Media;
  socialLinks?: SocialLink[];
  displayOrder?: number;
  isActive: boolean;
  bio?: any; // RichText content
}

const TeamMember: React.FC = () => {
  const [teamMemberData, setTeamMemberData] = useState<TeamMemberData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch team members from Payload CMS
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          "/api/team-members?where[isActive][equals]=true&sort=displayOrder",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }

        const data = await response.json();
        setTeamMemberData(data.docs || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="team-area different-wrap-color with-margin-top pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span>КОМАНДА</span>
            <h1 style={{ color: "var(--whiteColor)" }}>Завантаження...</h1>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="team-area different-wrap-color with-margin-top pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span>КОМАНДА</span>
            <h1 style={{ color: "var(--whiteColor)" }}>
              Помилка завантаження команди
            </h1>
          </div>
        </div>
      </div>
    );
  }

  // No team members found
  if (!teamMemberData || teamMemberData.length === 0) {
    return (
      <div className="team-area different-wrap-color with-margin-top pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span>КОМАНДА</span>
            <h1 style={{ color: "var(--whiteColor)" }}>
              Члени команди не знайдені
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="team-area different-wrap-color with-margin-top pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span>КОМАНДА</span>
            <h1 style={{ color: "var(--whiteColor)" }}>
              Наша команда професіоналів до Ваших послуг
            </h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12">
              <div className="team-left-content">
                {teamMemberData.slice(0, 1).map((member) => (
                  <div className="team-card" key={member.id}>
                    <div className="team-image">
                      {member.image?.url ? (
                        <Image
                          src={member.image.url}
                          alt={member.image.alt || member.name}
                          width={790}
                          height={790}
                        />
                      ) : (
                        <div
                          style={{
                            width: 790,
                            height: 790,
                            backgroundColor: "#f0f0f0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#999",
                          }}
                        >
                          Немає фото
                        </div>
                      )}

                      <div className="content">
                        <h2>{member.name}</h2>
                        <span>{member.designation}</span>
                      </div>
                    </div>

                    {/* Social Links - uncomment and customize if needed */}
                    {member.socialLinks && member.socialLinks.length > 0 && (
                      <ul className="team-social">
                        {member.socialLinks.map((social, index) => (
                          <li key={index}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={
                                social.customPlatformName || social.platform
                              }
                            >
                              <i className={getSocialIcon(social.platform)}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="team-right-content">
                <div className="row">
                  {teamMemberData.slice(1).map((member, i) => (
                    <div className="col-lg-6 col-md-6" key={member.id}>
                      <div className="team-card">
                        <div className="team-image">
                          {member.image?.url ? (
                            <Image
                              src={member.image.url}
                              alt={member.image.alt || member.name}
                              width={790}
                              height={790}
                            />
                          ) : (
                            <div
                              style={{
                                width: 790,
                                height: 790,
                                backgroundColor: "#f0f0f0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#999",
                              }}
                            >
                              Немає фото
                            </div>
                          )}

                          <div className="content">
                            <h2>{member.name}</h2>
                            <span>{member.designation}</span>
                          </div>
                        </div>

                        {/* Social Links - uncomment and customize if needed */}
                        {member.socialLinks &&
                          member.socialLinks.length > 0 && (
                            <ul className="team-social">
                              {member.socialLinks.map((social, index) => (
                                <li key={index}>
                                  <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={
                                      social.customPlatformName ||
                                      social.platform
                                    }
                                  >
                                    <i
                                      className={getSocialIcon(social.platform)}
                                    ></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper function to get appropriate CSS classes for social media icons
const getSocialIcon = (platform: string): string => {
  const iconMap: Record<string, string> = {
    linkedin: "fab fa-linkedin-in",
    twitter: "fab fa-twitter",
    instagram: "fab fa-instagram",
    facebook: "fab fa-facebook-f",
    github: "fab fa-github",
    website: "fas fa-globe",
    other: "fas fa-link",
  };

  return iconMap[platform] || "fas fa-link";
};

export default TeamMember;
