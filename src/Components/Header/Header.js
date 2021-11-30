import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Header.css";
import icon1 from "./../../images/icon-1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <div>
        <img alt="" src={icon1} className="icon" />
      </div>

      <div className="head header_nav_link">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Link
              exact
              to="/"
              activeClassName="active"
              className="head nav-links menu-name"
              onClick={handleClick}
            >
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              exact
              to="/allProjects"
              activeClassName="active"
              className="nav-links menu-name"
              onClick={handleClick}
            >
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              exact
              to="/blogs"
              activeClassName="active"
              className="nav-links menu-name"
              onClick={handleClick}
            >
              Blog
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              exact
              to="/aboutMe"
              activeClassName="active"
              className="nav-links menu-name"
              onClick={handleClick}
            >
              About Me
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links menu-name"
              onClick={handleClick}
            >
              Contact
            </Link>
          </Nav.Item>
          <Nav.Item>
            <button className="my-resume">
              <a
                className="resume-download"
                href="https://drive.google.com/file/d/1xxI9KHLMoaIA9zuZuovDywhrVhACfGfu/view"
                download
              >
                Resume Download
              </a>
            </button>
          </Nav.Item>
          <div className="nav-icon " onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default Header;
