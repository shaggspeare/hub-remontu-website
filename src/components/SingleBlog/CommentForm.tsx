"use client";

import React from "react"; 

const CommentForm: React.FC = () => {
  return (
    <>
      <form className="leave-comment-form">
        <h2>Leave A Comment</h2>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <label>
                YOUR NAME<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Jonathon Ronan"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <label>
                EMAIL ADDRESS<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="jonathonronana63@gmail.com"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <label>
                PHONE NO<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="+0 321 546 2345"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <label>WEBSITE</label>
              <input
                type="text"
                className="form-control"
                placeholder="Website"
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <label>
                YOUR MESSAGE HERE<span>*</span>
              </label>
              <textarea
                className="form-control"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <button type="submit" className="default-btn">
              Post Comment Now
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
