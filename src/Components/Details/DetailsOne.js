import React from "react";
import "./DetailsOne.css";
import ProjectsCarousel from "./../Carousel/Carousel";
import contact from "./../../images/contact.png";
import explore from "./../../images/explore.png";
import order from "./../../images/order.png";
import purchaseItem from "./../../images/purchaseItem.png";
const DetailsOne = () => {
  return (
    <div>
      <div className="2row mt-2 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-">
        <div className="col mt-3">
          <ProjectsCarousel
            home={contact}
            about={explore}
            manage={order}
            add={purchaseItem}
          ></ProjectsCarousel>
        </div>
        <div className="col mt-3">
          <h3 className="project-title">Maruti SuZuki Arena Website</h3>
          <p className="project-description">
            This is an Full-Stack Maruti Suzuki Cars website.User can Select
            Cars and Book for Buy also can Complete payment via Online payment.
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
              <strong className="technology">Back-end technology:</strong> Node
              js,Express js, MongoDB, Heroku,
            </li>
          </div>
        </div>
        <div className="text-center w-100 m-auto">
          <button className="btn btn-info project-button">
            <a target="blank" href="https://maruti-suzuki-arena-219f4.web.app/">
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
    </div>
  );
};

export default DetailsOne;
