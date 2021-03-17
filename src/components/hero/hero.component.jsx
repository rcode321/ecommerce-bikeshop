import React from "react";

import heroBanner from "../../assets/pascal-obermeier-YOphb-Xr2sk-unsplash.jpg";
import "./hero.styles.scss";

const Hero = () => (
  <div className="hero-container">
    <div className="HeadingTitleContainer">
      <h1 className="headingTitle">new arrivals</h1>
      <p>Featuring our latest collections and releases.</p>
    </div>
    <img className="heroImage" src={heroBanner} alt="heroBannerImage" />
  </div>
);

export default Hero;
