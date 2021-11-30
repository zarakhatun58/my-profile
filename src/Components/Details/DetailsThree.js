import React from "react";
import ProjectsCarousel from "./../Carousel/Carousel";
import home3 from "./../../images/home3.png";
import service3 from "./../../images/service3.png";
import helpline from "./../../images/helpline.png";
import "./DetailsOne.css";

const DetailsThree = () => {
  return (
    <div>
      <div className="row mt-2 carousel-area">
        <div className="col-md-5 col-lg-5 col-sm-5">
          <ProjectsCarousel
            home={home3}
            about={service3}
            manage={helpline}
            add={service3}
          ></ProjectsCarousel>
        </div>
        <div className="col-md-7 col-lg-7 col-sm-7">
          <h3 className="project-title">Medical-Health-Care Website</h3>
          <p className="project-description">
            This is an Full-Stack Medical-Health-Care Website.Anyone can visit
            to go to the health care for check up and doctor consultant .user
            can Login via Google sign, and email and password.
          </p>
          <div className="project-detailsP">
            <li>
              Users can take appointment and give a review for each service.
            </li>
            <li> Have admin dashboard and user dashboard.</li>
            <li> Admin can delete, add, manage Foods.</li>
            <li>
              User Can Create an Account and Login Via firebase authentication
            </li>
            <li>
              <strong className="technology">Front-end technology:</strong>{" "}
              React js, Bootstrap,React Router, Firebase Authentication,React
              Spring
            </li>
            <li>
              <strong className="technology">Back-end technology:</strong> Node
              js,Express js, MongoDB,Session Storage
            </li>
          </div>
        </div>
        <div className="text-center w-100 m-auto">
          <button className="btn btn-info project-button">
            <a target="blank" href="https://medical-health-care-5fef4.web.app/">
              Live Preview
            </a>
          </button>
          <button className="btn btn-info ml-5 project-button">
            <a
              target="blank"
              href="https://github.com/zarakhatun58/health-care"
            >
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsThree;
