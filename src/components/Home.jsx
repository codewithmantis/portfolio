import React from "react";
import mantis from "../assets/manits.gif";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <div>
      <main>
        <div className="animationCon">
          <img src={mantis} />
        </div>

        <div className="welcomeCon">
          <p>Welcome to codewithmantis</p>

          <p>
            I am a web developer and youtuber
            <br />
            and this is my portfolio.
          </p>
        </div>
      </main>

      {/*<footer>
        <p>You can find me using - </p>
        <button>
          <FaYoutube className='youtubeIcon' size={50} />
        </button>
        <button>
          <FaGithub className='githubIcon'  size={50} />
        </button>
      </footer>*/}
    </div>
  );
};

export default Home;
