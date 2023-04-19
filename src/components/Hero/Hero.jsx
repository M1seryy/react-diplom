import React from "react";
import "./hero.css";
import cloud from "../../images/hero-1-circle.png.png";
import backCircle from "../../images/hero-1-circle-3.png.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="text-content">
            <p className="main-text-sub-title">Access 2700+</p>
            <h3 className="main-text-content">
              Online Tutorial From Top Instructor.
            </h3>
            <button className="hero-btn">View Course</button>
          </div>
          <div className="img-content">
            <div className="hero-img-thumb"></div>
            <div className="hero-sub-img"></div>
          </div>
          <img className="backCircle" src={backCircle} alt="back-circle" />
          <div className="text-box">
            <h3 className="animate__animated animate__bounce">
              Tomorros is ours
            </h3>
          </div>
        </div>
        <img src={cloud} className="circle-cloud" alt="cloud" />
      </div>
    </section>
  );
};

export default Hero;
