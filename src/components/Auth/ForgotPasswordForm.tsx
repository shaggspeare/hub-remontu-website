"use client";

import React from "react";

const ForgotPasswordForm: React.FC = () => {
  return (
    <>
      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="forgot-password-box">
            <p>
              Lost your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </p>
            <form>
              <label>Email</label>
              <input type="email" className="form-control" />
              <button
                type="submit"
                className="default-btn position-relative two"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
