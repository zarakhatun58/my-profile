import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import icon1 from "./../../images/icon-1.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">
            {" "}
            <img alt="" src={icon1} style={{ width: "60px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="links  menu-name"
                onClick={handleClick}
              >
                Home
              </Link>
            </Nav>
            <Nav>
              <Link
                exact
                to="/allProjects"
                activeClassName="active"
                className="links menu-name"
                onClick={handleClick}
              >
                Projects
              </Link>
              <Link
                exact
                to="/blogs"
                activeClassName="active"
                className="links menu-name"
                onClick={handleClick}
              >
                Blog
              </Link>
              <Link
                exact
                to="/aboutMe"
                activeClassName="active"
                className="links menu-name"
                onClick={handleClick}
              >
                About Me
              </Link>
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="links menu-name"
                onClick={handleClick}
              >
                Contact
              </Link>
              <button className="my-resume">
                <a
                  className="resume-download"
                  href="https://drive.google.com/file/d/1xxI9KHLMoaIA9zuZuovDywhrVhACfGfu/view"
                  download
                >
                  Resume Download
                </a>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
