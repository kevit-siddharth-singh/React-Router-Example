import React from "react";
import "./_404_Page.css";
const _404_Page = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="gif">
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="content">
          <h1 className="main-heading">This page is gone.</h1>
          <p>
            ...maybe the page you're looking for is not found or never existed.
          </p>
          <a href="https://www.google.co.in/" target="blank">
            <button>
              Back to home <i className="far fa-hand-point-right" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default _404_Page;
