import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Header.css";
import icon1 from "./../../images/icon-1.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <div>
        <img alt="" src={icon1} className="icon" />
      </div>

      <div className="head">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              exact
              to="/"
              activeClassName="active"
              className="heade nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              exact
              to="/projects"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              exact
              to="/blogs"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Contact
            </Nav.Link>
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
