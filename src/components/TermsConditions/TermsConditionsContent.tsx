"use client";

import React from "react";
import Link from "next/link";

const TermsConditionsContent: React.FC = () => {
  return (
    <>
      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="privacy-policy-content">
            <p>Last updated on July 12, 2024.</p>

            <p>
              Hi there, we’re <strong>Traz</strong>, and welcome to our privacy
              policy which also applies to our customers.
              <br />
              This policy sets out how we handle your personal information if
              you’re an <strong>Traz</strong> user or visitor to our site.
            </p>

            <p>
              When we say ‘we’, ‘us’, or <strong>‘Traz’</strong>, it’s because
              that’s who we are and we own and run the site.
              <br />
              If we say ‘policy’ we’re talking about this Terms & Conditions. If we
              say ‘user terms’ we’re talking about the rules for using the site.
              The rules vary by product; each product makes them separately
              available and seeks consent to them separately to this policy.
            </p>

            <h4>The Type Of Personal Information We Collect</h4>
            <p>
              We collect certain personal information about visitors and users
              of our site.
              <br />
              The most common types of information we collect include things
              like: user-names, member names, email addresses, other contact
              details, support queries, and item comments (if applicable).
            </p>

            <h4>How We Collect Personal Information</h4>
            <p>
              We collect personal information directly when you provide it to
              us, automatically as you navigate through the site.
            </p>
            <p>
              We collect your personal information when you provide it to us
              when you complete membership registration and buy items or
              services on our site, subscribe to a newsletter, email list,
              submit feedback or send us a communication.
            </p>

            <h4>How We Use Personal Information</h4>
            <p>
              This data is intended to identify you as our{" "}
              <Link href="#">customer subscriber</Link> and deliver
              products/information and other marketing elements. Visitors aren’t
              allowed to purchase any product or subscribe to the newsletter or
              make a comment anonymously. So, this information is the only means
              we can identify you and allow you to make these actions on the
              site.
            </p>

            <h4>When We Disclose Your Personal Information</h4>
            <p>
              We won’t disclose your data to third parties in a way as to reveal
              any of your personal information like email, name, etc. (subject
              to laws and regulations). Only our <i>authorities</i> have access
              to your data and no third-party access to your data from us.
            </p>

            <h4>How We Keep Your Personal Information Secure</h4>
            <p>
              We store personal information on secure servers managed by us, and
              our service providers and files are kept in a secure location.
              Personal{" "}
              <Link href="#" target="_blank">
                information
              </Link>{" "}
              that we store is protected by security and access controls,
              including username and password authentication, two-factor
              authentication, and data encryption where appropriate.
            </p>

            <h4>How You Can Access Your Personal Information</h4>
            <p>
              You can access some of the personal information we collect by
              logging in to your account. You also have the right to request
              access to other personal information we hold about you and to
              request corrections of any errors in that data. Contact our
              support using the contact details to make an access or correction
              request.
            </p>

            <h4>Marketing Choices Regarding Your Personal Information</h4>
            <p>
              Where we have your consent to do so (e.g., if you have subscribed
              to one of our email lists or have indicated that you are
              interested in receiving offers or information from us), we send
              you marketing communications by email about products and services
              that we feel may be of interest to you. You can ‘opt-out’ of such
              communications if you prefer not to receive them in the future by
              using the “unsubscribe” facility provided in the communication.
            </p>
            <p>
              You also have choices about <u>cookies</u>, as described below. By
              modifying your browser preferences, you can accept all cookies, be
              notified when a cookie is set, or reject all cookies. If you
              reject cookies, some parts of our site may not work properly in
              your case.
            </p>

            <h4>Cookies (Not The Type You Eat!) And Web Analytics</h4>
            <p>
              We use cookies to identify and track visitors, their actions on
              the site, and their website access preferences. These cookies
              contain visitors’ IP and time of visits. <strong>Traz</strong>{" "}
              visitors who do not wish to have cookies placed on their browsers
              should set their browsers to refuse cookies before using the{" "}
              <strong>Traz</strong> site.
            </p>

            <h4>How Long We Keep Your Personal Information</h4>
            <p>
              We retain your personal information for as long as is necessary to
              provide the services to you and others and to comply with our
              legal obligations. If you no longer want us to use your personal
              information or to provide you with the <strong>Traz</strong>{" "}
              services, you can request that we erase your personal information
              and close your account.
            </p>

            <h4>When We Need To Update This Policy</h4>
            <p>
              We will need to change this policy from time to time to ensure it
              stays up to date with the latest legal requirements and any
              changes to our privacy management practices. When changing the
              policy, we will notify you about such changes; where required, a
              copy of the latest version of this policy will always be available
              on this page.
            </p>

            <h4>How You Can Contact Us</h4>
            <p>
              If you have any questions about our privacy practices or how we
              have been managing your personal information, please get in touch
              with our support at{" "}
              <Link href="mailto:hello@traz.com">hello@traz.com</Link>.
            </p>
            <p>
              Both personal information and personal data have the same meaning
              in the context of this Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditionsContent;
