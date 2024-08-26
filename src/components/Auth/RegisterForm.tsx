"use client";

import React from "react";
import Link from "next/link";

const RegisterForm: React.FC = () => {
  return (
    <>
      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="register-form">
            <div className="content">
              <h3>
                Create Your <b>Account</b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <form>
              <div className="form-group">
                <label>USERNAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>

              <div className="form-group">
                <label>PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <label>CONFIRM PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div>

              <p className="alert-text">
                The password should be at least eight characters long. To make
                it stronger, use upper and lower case letters, numbers, and
                symbols
              </p>

              <button type="submit" className="default-btn">
                Register
              </button>
              
              <div className="text">
                <p>
                  Already have an account? <Link href="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
