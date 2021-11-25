import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer d-flex align-items-center justify-content-center">
      <div className="text-center">
        <p>
          <small>Copyright © 2021 | Jahanara Khatun</small>
        </p>
        <p>
          <address>Kolkata, West-Bengal, India</address>
        </p>
        <div>
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
      </div>
    </div>
  );
};

export default Footer;
