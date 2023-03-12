import React from "react";
import { navLinks } from "../data";
import { Icons } from "../data";
import Navlogo from "../Images/logo-nav.JPG";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left">
        <img src={Navlogo} alt="" srcset="" />
      </div>
      <div className="middle">
        <ul className="list">
          {navLinks.map((e) => {
            return (
              <li id={e.id} className="nav-items">
                <a href={e.href}>{e.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        {Icons.map((e) => {
          return <span id={e.id}>{e.icon}</span>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
