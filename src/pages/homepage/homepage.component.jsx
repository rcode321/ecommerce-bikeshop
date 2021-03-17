import React from "react";
import Directory from "../../components/directory/directory.component";
import Hero from "../../components/hero/hero.component";
import "./homepage-styles.scss";

const Homepage = () => (
  <div className="homepage-container">
    <Hero />
    <Directory />
  </div>
);

export default Homepage;
