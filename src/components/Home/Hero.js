import React from "react";
import "./Hero.css";
import About from "../About/About"
import Domain from "../Domain/Domain"
import Partner from "../Partner/partner"
import Sponsor from "../Sponsor/Sponsor";
import FAQ from "../FAQ/Faq";
import Contact from "../Contact/Contact";
import Prizes from "../Prizes/Prizes"
import Competitions from "../Carousel/Competition";

const Hero = () => {
  return (
    <>
      <div className="home-section">
        <div className="main-wrapper">
          <div className="title">lines of code</div>
          <div className="coming-soon-wrapper">2023-2024 COMING SOON!</div>
        </div>
      </div>
      <About></About>
      <Domain></Domain>
      <Prizes></Prizes>
      <Partner></Partner>
      {/* <Competitions /> */}
      <Sponsor></Sponsor>
      <FAQ></FAQ>
      <Contact></Contact>
    </>
  );
};

export default Hero;
