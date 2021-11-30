import React from "react";
import home4 from "./../../images/home4.png";
import service4 from "./../../images/service4.png";
import product from "./../../images/product.png";
import "./DetailsOne.css";
import ProjectsCarousel from "./../Carousel/Carousel";

const DetailsFour = () => {
  return (
    <div>
      <div className="row mt-2 carousel-area">
        <div className="col-md-5 col-lg-5 col-sm-5">
          <ProjectsCarousel
            home={home4}
            about={service4}
            manage={service4}
            add={product}
          ></ProjectsCarousel>
        </div>
        <div
          className="col-md-7 col-lg-7 col-sm-7"
          // style={styles.slideInLeft}
        >
          <h3 className="project-title">Our Code Education</h3>
          <p className="project-description">
            This is Our Code Education website.user can Choice the service as
            he/she want.
          </p>
          <div className="project-detailsP">
            <li>User can Choice the perfect teaching as he/she Want</li>
            <li>
              We strive to provide the highest learning standards in programming
              at low cost.
            </li>
            <li>
              The most advanced service among our services is to spread the
              details of programming in line with the advanced technology of the
              world
            </li>
            <li>
              Separate campuses for students and teachers have our own way of
              doing private gym services
            </li>
            <li>
              <strong className="technology">Front-end Technology:</strong>{" "}
              React js, Bootstrap,React Router,Firebase Authentication,Wow js
            </li>
          </div>
        </div>
        <div className="text-center w-100 m-auto">
          <button className="btn btn-info project-button">
            <a target="blank" href="https://jahanara-assignment-9.netlify.app/">
              Live Preview
            </a>
          </button>
          <button className="btn btn-info ml-5 project-button">
            <a target="blank" href="https://github.com/zarakhatun58/review-pro">
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsFour;
