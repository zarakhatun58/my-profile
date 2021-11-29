import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon1 from "./../../images/icon-1.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container ">
          <NavLink exact to="/" className="nav-logo text-left">
            <img
              className="myLogo"
              style={{ width: "60px" }}
              src={icon1}
              alt=""
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="my-resume">
                <a
                  className="resume-download"
                  href="https://drive.google.com/file/d/1xxI9KHLMoaIA9zuZuovDywhrVhACfGfu/view"
                  download
                >
                  Download Resume
                </a>
              </button>
            </li>
          </ul>
          <div className="nav-icon " onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
