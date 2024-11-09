import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import "../styles/projects.css";
const Projects = () => {
  const projects = {
    1: {
      name: "chat-app",
      description: "A chat app where you can add and chat with friends!",
      langs: ["react", "node", "sqlite"],
      img: "https://i.ytimg.com/vi/Q3ixb1w-QaY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3HZ9o9YB0LcfkKCMCQuVPe4rYZA",
      git: "https://github.com/codewithmantis/chatapp",
      yt: "https://www.youtube.com/@codewithmantis",
    },

    2: {
      name: "3d clock",
      description: "a 3d clock made just using html, css and js",
      langs: ["html", "css", "js"],
      img: "https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo",
      git: "https://github.com/codewithmantis/clockHTMLCSS",
      yt: "https://www.youtube.com/shorts/Td5qY2BcgV8",
    },

    3: {
      name: "joystick controller",
      description:
        "a joystick controller made with arduino and works on pygame",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9780d482-d14b-4be5-9056-a7fa6815bdac/delzr24-ddcb1af9-7800-4c79-a36f-c2277872488e.png/v1/fill/w_1280,h_720,q_80,strp/arduino_wallpaper_by_azagramac_delzr24-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOTc4MGQ0ODItZDE0Yi00YmU1LTkwNTYtYTdmYTY4MTViZGFjXC9kZWx6cjI0LWRkY2IxYWY5LTc4MDAtNGM3OS1hMzZmLWMyMjc3ODcyNDg4ZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7g0vTaYeKXJ_VhhRywh6DbliHV7eqFgbAuYrvYDpMt8",
      git: "https://github.com/codewithmantis/joystickPyArd",
      yt: "https://www.youtube.com/shorts/ccLDnkOE5E0",
    },

    4: {
      name: "Thermistor checker",
      description: "A health checker using arduino and python",
      img: "https://th.bing.com/th/id/R.2bf5263c9ceeb7ff3b0cc15b6f80301d?rik=rZwLXP08NM8Tnw&riu=http%3a%2f%2fdrlisawatson.com%2fwp-content%2fuploads%2f2015%2f03%2fBBT-1024x706.png&ehk=nw51J6Hgy3MZZFv2FqilAtf9jKurbSv7EiY6rcrTwUM%3d&risl=&pid=ImgRaw&r=0",
      git: "https://github.com/codewithmantis/thermistorWithPy",
      yt: "https://youtube.com/shorts/VN5vrujXL0o?si=q9xgq6Lw1yL7Ke3T",
    },
    5: {
      name: "scraper AI",
      description: "A python scraper ai that scrapes info from google",
      img: "https://media.licdn.com/dms/image/D4D12AQFLgVWOMFNpDQ/article-cover_image-shrink_720_1280/0/1699454142398?e=2147483647&v=beta&t=XJFmNXwDZsmmso5wLOazsulWyQlBYXGuEmQfBaWngfE",
      git: "https://github.com/codewithmantis/scrapeAI",
      yt: "https://www.youtube.com/watch?v=fGwlv0u9PxA&t=42s",
    },
    6: {
      name: "E-commerce website",
      description: "A shopping site",
      img: "https://uicookies.com/wp-content/uploads/2018/06/electro-shop-website-template.jpg?is-pending-load=1",
      git: "https://github.com/codewithmantis/shopweb",
      yt: "https://youtube.com/@codewithmantis",
    },
  };

  return (
    <div className="projectApp">
      {Object.keys(projects).map((key, index) => (
        <div className="projectCon" key={index}>
          <div className="projectImg">
            <img src={projects[key].img} />
          </div>
          <div className="projectInfo">
            <p>{projects[key].name}</p>
            <div className="ytgitCon">
              <a href={projects[key].git} target="_blank">
                <FaGithub size={30} />
              </a>
              <a href={projects[key].yt} target="_blank">
                <FaYoutube size={30} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
