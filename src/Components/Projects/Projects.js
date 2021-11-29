import React from "react";
import { Link } from "react-router-dom";
import ProjectsCarousel from "./../Carousel/Carousel";
import contact from "./../../images/contact.png";
import explore from "./../../images/explore.png";
import order from "./../../images/order.png";
import purchaseItem from "./../../images/purchaseItem.png";
import home from "./../../images/home.png";
import contact1 from "./../../images/contact1.png";
import booking from "./../../images/booking.png";
import home3 from "./../../images/home3.png";
import service3 from "./../../images/service3.png";
import helpline from "./../../images/helpline.png";

const Projects = () => {
  return (
    <div>
      <div className="container w-75">
        <h1 className="text-center mt-5 mb-5"> My Recent Projects </h1>
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={contact}
              about={explore}
              manage={order}
              add={purchaseItem}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">Maruti SuZuki Arena Website</h3>
            <p className="project-description">
              This is an Full-Stack Maruti Suzuki Cars website.User can Select
              Cars and Book for Buy also can Complete payment via Online
              payment.
            </p>
            <div className="project-detailsP">
              <li>Have admin and user different dashboard.</li>
              <li> Admin can delete, add, manage services.</li>
              <li> Admin can Make Admin also</li>
              <li>User can Login via (Google Sign-in,Email & Password) </li>
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js, Bootstrap,React-Router-Dom, Firebase
                Authentication,Stripe,
              </li>
              <li>
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB, Heroku,
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a
                target="blank"
                href="https://maruti-suzuki-arena-219f4.web.app/"
              >
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="blank"
                href="https://github.com/zarakhatun58/suzuki-arena-client-side"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        {/* second project info */}
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
                Tourista Travel service Agency give special winter offer for
                their foreign tourist..
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
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB, Heroku,
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

        {/* third project info  */}

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
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB,Session Storage
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a
                target="blank"
                href="https://medical-health-care-5fef4.web.app/"
              >
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

        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            {/* <ProjectsCarousel
              home={travelGuruHome}
              about={travelGuruLogin}
              manage={travelGuruMap}
              add={travelGuruSearch}
            ></ProjectsCarousel> */}
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
                We strive to provide the highest learning standards in
                programming at low cost.
              </li>
              <li>
                The most advanced service among our services is to spread the
                details of programming in line with the advanced technology of
                the world
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
              <a
                target="blank"
                href="https://jahanara-assignment-9.netlify.app/"
              >
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="blank"
                href="https://github.com/zarakhatun58/review-pro"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
        <div id="moreButton" className="text-center pb-5 more-projects-btn">
          <Link to="/projects">
            <button className="btn ">More Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
