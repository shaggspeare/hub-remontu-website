"use client";

import React from "react";
import Image from "next/image";

import quoteIcon from "../../../public/images/client/quote.svg";

const clientsFeedbackData = [
  {
    id: "1",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user1.png",
    name: "Jonathon Ronan",
    designation: "Client",
  },
  {
    id: "2",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user2.png",
    name: "Angela Carter",
    designation: "Client",
  },
  {
    id: "3",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user3.png",
    name: "Skyler White",
    designation: "Client",
  },
  {
    id: "4",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user4.png",
    name: "Wade",
    designation: "Client",
  },
  {
    id: "5",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user5.png",
    name: "Roberto",
    designation: "Client",
  },
  {
    id: "6",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user6.png",
    name: "Ramon",
    designation: "Client",
  },
  {
    id: "7",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user7.png",
    name: "Nathaniel",
    designation: "Client",
  },
  {
    id: "8",
    feedbackText:
      "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations with our team is a great high in demand.",
    image: "/images/client/user8.png",
    name: "Antonio",
    designation: "Client",
  },
];

const TestimonialsContent: React.FC = () => {
  return (
    <>
      <div className="client-wrap-area with-two-style-wrap pt-100 pb-100">
        <div className="container">
          <div className="section-title-wrap">
            <span>REVIEWS</span>
            <h2>Our Clients Talk About Us & Believe In Our Work</h2>
          </div>

          {clientsFeedbackData && (
            <div className="row justify-content-center">
              {clientsFeedbackData &&
                clientsFeedbackData.map((value, i) => (
                  <div className="col-xl-6 col-md-6" key={i}>
                    <div className="client-wrap-card">
                      <div className="icon">
                        <Image src={quoteIcon} alt="quote" width={56} height={56} />
                      </div>

                      <p>{value.feedbackText}</p>

                      <div className="info d-flex align-items-center">
                        <div className="image">
                          <Image
                            src={value.image}
                            alt="image"
                            width={70}
                            height={70}
                          />
                        </div>
                        <div className="title">
                          <h3>{value.name}</h3>
                          <span>{value.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <div className="nav-links">
                    <a href="#" className="prev">
                      <i className="ri-arrow-left-s-line"></i>
                    </a>
                    <span className="page-numbers current">1</span>
                    <a href="#" className="page-numbers">
                      2
                    </a>
                    <a href="#" className="page-numbers">
                      3
                    </a>
                    <a href="#" className="next">
                      <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestimonialsContent;
