import React from "react";
import "./AboutMe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <>
      <div className="row mt-2 ">
        <div className="m-5 p-5 col-md-6 col-lg-6 col-sm-12 col">
          <h1 className="about-title font ">
            <span style={{ color: " rgb(70, 104, 8)" }}> HI !</span> <br /> I'M
            JAHANARA
            <br /> KHATUN
          </h1>
          <h4 style={{ color: " rgb(70, 104, 8)" }}>
            "Junior Web Developer", <br />
            "Fronted Developer",
            <br />
            "React Developer",
            <br />
            "JavaScript Developer",
          </h4>
          <p className="mt-2 paragraph" style={{}}>
            I am an enthusiastic JavaScript developer <br /> with knowing some
            framework for the <br /> frontend and the backend. I know Basic{" "}
            <br />
            PHP and MySQL but basically a MERN developer.
          </p>
          <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="https://www.linkedin.com/in/jahanara-khatun-5623821b0/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </button>
          <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="https://github.com/zarakhatun58"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
          <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="https://mail.google.com/mail/u/0/#inbox"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </button>
          <button className="icon-button">
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
        <div className=" col-md-6 col-lg-6 col-sm-12 col">
          <div className="profile-pic">
            <img
              id="image"
              src="https://i.ibb.co/QjJZ2sv/pic1.jpg"
              alt=""
              style={{ borderRadius: "50%" }}
            />
          </div>
          <dev>
            <button className="btn btn-success mt-3 mx-2">Hire Me</button>
            <button className="btn btn-success mt-3 resume-download">
              <a
                className="text-light"
                href="https://drive.google.com/file/d/1xxI9KHLMoaIA9zuZuovDywhrVhACfGfu/view"
                download
              >
                Download Resume
              </a>
            </button>
          </dev>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
