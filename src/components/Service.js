import React from "react";
import { service } from "../data";
import Title from "./Title";

const Service = () => {
  return (
    <div id="services" className="Services">
      <Title part1={"our"} part2={"services"} />
      <div id="services-items">
        {service.map((e) => {
          return (
            <div id={e.id} className="">
              <span className="services-icons">{e.icon}</span>
              <div className="servies-items-text">
                <h2>{e.title}</h2>
                <p>{e.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
