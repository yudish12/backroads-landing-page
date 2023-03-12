import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tour = () => {
  return (
    <div id="tours">
      <Title part1={"featured"} part2={"tours"} />
      <div className="tours-container">
        {tours.map((e) => {
          return (
            <div key={e.id}>
              <div className="tour-img">
                <img src={e.image} alt="" />
                <p>{e.date}</p>
              </div>
              <div className="tours-content">
                <h3>{e.title}</h3>
                <p>{e.info}</p>
                <div className="tour-footer">
                  <p>{e.location}</p>
                  <p>{e.cost}</p>
                  <p>{e.duration}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tour;
