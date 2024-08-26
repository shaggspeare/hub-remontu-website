"use client";

import React from "react";
import Link from "next/link";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="login-form">
            <div className="content">
              <h3>
                Log In <b>Here</b>
              </h3>
              <p>Welcome back. Log in to your account.</p>
            </div>

            <form>
              <div className="form-group">
                <label>USERNAME OR EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or email"
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

              <div className="form-bottom d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>

                <Link href="/forgot-password" className="forgot-password">
                  Forgot your password?
                </Link>
              </div>

              <button type="submit" className="default-btn">
                Login
              </button>

              <div className="text">
                <p>
                  Don&apos;t have an account?{" "}
                  <Link href="/register">Create Account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
