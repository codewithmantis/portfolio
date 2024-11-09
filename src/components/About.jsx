import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import "../styles/about.css";
const About = () => {
  return (
    <div>
      <div className="aboutme">
        <h1>About me</h1>
        <p>
          I am a teenager and i am self thought coder, i started coding about 3
          years ago, then i took it very serious since i got in highschool. I
          learned basics of python in my school while i was doing that i learned
          how to make websites and how i can use html,css, and js. then i
          countinue to try django but it didnt go well so i went back again to
          js and learned the DOM and React js, then i made a vr game using unity
          and i bought an arduino starter pack which i made cool projects uing
          c++. Now i want to learn php since i find it easy to work with the
          database and i also want to advance my React js. and i hope to get a
          job or internship someday.
        </p>
      </div>

      <div className="mylearning">
        <h1>What i have learned so far - </h1>
        <div className="langsCon">
          <div className="html">
            <FaHtml5></FaHtml5>
            99.9%
          </div>
          <div className="css">
            <FaCss3></FaCss3>
            95%
          </div>
          <div className="py">
            <FaPython></FaPython>
            93%
          </div>
          <div className="js">
            <FaJs></FaJs>
            85%
          </div>
          <div className="rjs">
            <FaReact></FaReact>
            64%
          </div>
          <div className="git">
            <FaGithub></FaGithub>
            15%
          </div>
        </div>

        <div>
          <p>Help me to get 3m views in youtube shorts or 3k watch hours</p>
          <p>
            follow me on youtube -{" "}
            <a href="https://youtube.com/@codewithmantis">@codewithmantis</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
