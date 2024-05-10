import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./About.css";

const About = () => {
  return (
    <>
      <section>
        <div className="row w-75 m-auto ">
          <div className="col-md-6 mt-5">
            <h1 className="text-center my-skill">My Skills</h1>
            <li className="text-left mt-5 mb-2 skills">Expertise:</li>

            <div className="row">
              <p className="skills-btn">React Js</p>
              <p className="skills-btn">Ionic</p>
              <p className="skills-btn">React Bootstrap</p>
              <p className="skills-btn">Ionic</p>
              <p className="skills-btn">Material UI</p>
              <p className="skills-btn">HTML5</p>
              <p className="skills-btn">CSS3</p>
              <p className="skills-btn">Bootstrap</p>
              <p className="skills-btn">JavaScript (ES6)</p>
              <p className="skills-btn">React Spring</p>
            </div>
            <li className="text-left mt-3 mb-2 skills">Comfortable:</li>
            <div className="row">
              <p className="skills-btn">Redux</p>
              <p className="skills-btn">Node</p>
              <p className="skills-btn">MongoDB</p>
              <p className="skills-btn">Share Point</p>
              <p className="skills-btn">Microsoft Graph Api</p>
            </div>
            <li className="text-left mt-3 mb-2 skills">Familiar:</li>
            <div className="row">
              <p className="skills-btn">Firebase</p>
              <p className="skills-btn">Express js</p>
              <p className="skills-btn">Tailwind</p>
              <p className="skills-btn">Next js</p>
              <p className="skills-btn">jquery</p>
              <p className="skills-btn">PHP</p>
            </div>
            <li className="text-left mt-3 mb-2 skills">Extra Skills:</li>
            <div className="row">
              <p className="skills-btn">MS-Office</p>
              <p className="skills-btn">Adobe Photo shop</p>
              <p className="skills-btn">Adobe XD</p>
              <p className="skills-btn">Figma</p>
            </div>
            <li className="text-left mt-3 mb-2 skills">Tools:</li>
            <div className="row">
              <p className="skills-btn">Git</p>

              <p className="skills-btn">VS Code</p>
              <p className="skills-btn">Code Blocks</p>
              <p className="skills-btn">Chrome Dev Tool</p>
              <p className="skills-btn">Heroku</p>
              <p className="skills-btn">Firebase</p>

              <p className="skills-btn">Netlify</p>
              <p className="skills-btn">Vercel</p>
            </div>
          </div>
          <div className="col-md-6  mt-5">
            <div className="profile-pic mt-5 mb-5" data-aos="flip-right">
              <img
                src="https://i.ibb.co/c6Tc1JC/my-pic.jpg"
                alt=""
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <h1 className="title">
                I'M <br />
                <Typewriter
                  words={[" JAHANARA", "KHATUN"]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="my-description">
                I am an enthusiastic JavaScript developer with knowing some
                framework for the frontend and the backend. I know Basic PHP and
                MySQL but basically a MERN Stack developer. I always focus on
                learning new technology.
              </p>
            </div>

            <div className="mt-5 mb-5">
              <button className="icon-button mx-2">
                <a
                  className="icon-button "
                  target="blank"
                  href="https://www.linkedin.com/in/er-jahanara/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </button>
              <button className="icon-button mx-2">
                <a
                  className="icon-button"
                  target="blank"
                  href="https://github.com/zarakhatun58"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </button>
              <button className="icon-button mx-2">
                <a
                  className="icon-button"
                  target="blank"
                  href="https://mail.google.com/mail/u/0/#inbox"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </button>
              <button className="icon-button mx-2">
                <a
                  className="icon-button"
                  target="blank"
                  href="https://www.instagram.com/wbcs_study/"
                >
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </button>
              <button className="icon-button">
                <a
                  className="icon-button"
                  target="blank"
                  href="https://www.facebook.com/jemmy.seikh"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </button>
            </div>
            <h1 className="mb-4 my-skill ">My Education</h1>
            <div className="education w-100 m-auto text-center">
              <h3 className="mb-4 mt-5 under ">Post Graduation</h3>
              <h4 className="">Masters in Literature</h4>
              <h5>
                Rabindra Bharati University{" "}
                <small>( Kolkata,West Bengal,India )</small>
              </h5>

              <p>2014</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
