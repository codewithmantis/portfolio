import React from "react";

import yticon from "../assets/yticon.png";
const Nav = () => {
  return (
    <nav>
      <ul>
        <img src={yticon} />
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
