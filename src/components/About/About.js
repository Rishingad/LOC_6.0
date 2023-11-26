import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div id="about" className="aboutUs-Container">
        <h1 className="aboutUs-Head">About</h1>
        <p className="aboutUs-Body">
          Lines of Code (LOC) is not just your ordinary hackathon - it's a
          <span className="aboutUs-Body-HighLight"> 24-hour</span> coding
          extravaganza that has set the standard for innovation and fun in the
          tech world.We've successfully organized five spectacular editions of
          LOC, each more impressive than the last. Last year, we made it bigger
          and better with a prize pool of
          <span className="aboutUs-Body-HighLight"> 1.2 lakh INR.</span> Hosted
          by{" "}
          <span className="aboutUs-Body-HighLight">
            {" "}
            DJSCE's ACM student chapter
          </span>
          , LOC is all about celebrating the spirit of coding and creativity. We
          provide a platform for tech enthusiasts to come together, collaborate,
          and turn their wildest ideas into reality. It's where innovation meets
          the keyboard, and the results are nothing short of spectacula Join us
          for the next session of LOC and experience the thrill, the learning,
          and the camarader ie. that define our hackathon. Whether you're a
          seasoned coder or just starting your coding journey, LOC is your stage
          to shine. Get ready to code, collaborate, and create, because LOC is
          where innovation comes to life.
        </p>
      </div>
    </>
  );
};

export default About;
