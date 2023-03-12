import React from "react";
import img from "../Images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <div id="about" className="about">
      <Title part1={"about"} part2={"us"} />
      <div className="about-content">
        <div className="about-img">
          <img src={img} alt="about-img" />
        </div>
        <div className="about-text">
          <h2 style={{ letterSpacing: "6px", fontSize: "1.8rem" }}>
            Explore The Difference
          </h2>
          <p style={{ letterSpacing: "2px", color: "hsl(209, 23%, 60%)" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            culpa, quidem tenetur architecto commodi deleniti molestiae debitis
            non vero incidunt illum minima quis, eaque officiis totam vel quas!
            Possimus, quos!
          </p>
          <button className="about-btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
