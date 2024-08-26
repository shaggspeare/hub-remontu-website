"use client";

import React from "react";
import Link from "next/link";

const PricingPlan: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap p-0" style={{ maxWidth: "500px" }}>
            <h2 className="mb-2">Our Pricing Plan</h2>
            <p>
              We are a leading architecture firm dedicated to creating visionary
              designs that transcend expectations.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="pricing-plan">
                <h4>Basic Plan</h4>
                <p>
                  We are a leading architecture firm dedicated to creating
                  visionary designs that transcend expectations.
                </p>
                <h2>$39.00</h2>

                <ul>
                  <li>
                    <i className="ri-check-line"></i> Concept Development
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Information architecture
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Full Design Development
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Lifetime Support
                  </li>
                </ul>

                <Link href="/contact-us" className="default-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-plan">
                <h4>POPULAR PLAN</h4>
                <p>
                  We are a leading architecture firm dedicated to creating
                  visionary designs that transcend expectations.
                </p>
                <h2>$49.00</h2>

                <ul>
                  <li>
                    <i className="ri-check-line"></i> Concept Development
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Information architecture
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Full Design Development
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Lifetime Support
                  </li>
                </ul>

                <Link href="/contact-us" className="default-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-plan">
                <h4>PREMIUM PLAN</h4>
                <p>
                  We are a leading architecture firm dedicated to creating
                  visionary designs that transcend expectations.
                </p>
                <h2>$69.00</h2>

                <ul>
                  <li>
                    <i className="ri-check-line"></i> Concept Development
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Information architecture
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Full Design Development
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lifetime Support
                  </li>
                </ul>

                <Link href="/contact-us" className="default-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
