import React from "react";
import "./DetailsOne.css";
import home from "./../../images/home.png";
import contact1 from "./../../images/contact1.png";
import booking from "./../../images/booking.png";
import ProjectsCarousel from "./../Carousel/Carousel";

const DetailsTwo = () => {
  return (
    <div>
      <div className="row mt-2 carousel-area">
        <div className="col-md-5 col-lg-5 col-sm-5">
          <ProjectsCarousel
            home={home}
            about={contact1}
            manage={booking}
            add={booking}
          ></ProjectsCarousel>
        </div>
        <div className="col-md-7 col-lg-7 col-sm-7">
          <h3 className="project-title">Tourista Website</h3>
          <p className="project-description">
            This is full stack website.This is Tourista Travel service Agency
            anyone can Book Tourist Place and historical place and start their
            journey at any time .
          </p>
          <div className="project-detailsP">
            <li>
              User must need to Login via Google or create an free account
            </li>
            <li>User need to Book Tourist Place and give review</li>
            <li>
              Tourista Travel service Agency give special winter offer for their
              foreign tourist..
            </li>
            <li>
              User will allow to give Feed Back about his/her tourist journey
              after finished their Journey{" "}
            </li>
            <li>
              <strong className="technology">Front-end technology:</strong>{" "}
              React js, Bootstrap,React Router, Firebase
              Authentication,React,Javascript, rest api .
            </li>
            <li>
              <strong className="technology">Back-end technology:</strong> Node
              js,Express js, MongoDB, Heroku,
            </li>
          </div>
        </div>
        <div className="text-center w-100 m-auto">
          <button className="btn btn-info project-button">
            <a target="blank" href="https://turista-97b86.web.app/">
              Live Preview
            </a>
          </button>
          <button className="btn btn-info ml-5 project-button">
            <a
              target="blank"
              href="https://github.com/zarakhatun58/tourism-client-side"
            >
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsTwo;
