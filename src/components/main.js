import React from "react";
import "./main.css";

function main() {
  return (
    <div className="card-wrapper">
      <div className="bg-img"></div>
      <div className="profile-header">
        <div className="profile-img">
          <img src="images/eel.jpg" alt="profile" />
        </div>
        <div className="header-txt">
          <div className="title">
            <h1>Honeycomb Moray</h1>
            <h2>8</h2>
          </div>
          <h5>Albuquerque BioPark</h5>
          <a
            href="https://www.linkedin.com/in/joshuajosue/"
            target="_blank"
            rel="noreferrer"
          >
            JJ Linkedin
          </a>
        </div>
      </div>

      <hr></hr>

      <div className="cols">
        <div className="col">
          <h4>80K</h4>
          <h6>FOLLOWERS</h6>
        </div>
        <div className="col">
          <h4>803K</h4>
          <h6>LIKES</h6>
        </div>
        <div className="col">
          <h4>1.4K</h4>
          <h6>PHOTOS</h6>
        </div>
      </div>
    </div>
  );
}

export default main;
