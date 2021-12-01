import React from "react";
import "./MyServices.css";

const MyServices = () => {
  return (
    <div>
      <div className=" mt-5 ">
        <h1 className="text-center font pt-5"> Choose I Provide</h1>
        <div className="services">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service">
                <img src="https://i.ibb.co/7kN1NNx/Mern.png" alt="" />

                <h3>Web Designing</h3>
                <p className="paragraph3">
                  I am expert in web designing. I can add functionality besides
                  designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js,
                  React JS for it. You can see some of my works below
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service ">
                <img
                  className="mern-image "
                  src="https://i.ibb.co/GQ8DQ5V/new-mern.jpg"
                  alt=""
                />
                <h3>MERN Developer</h3>
                <p className="paragraph3">
                  I am a MERN stack web developer. I use MongoDB for database
                  and Express JS, Node Js for server side work. You can see i
                  have done some MERN project.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service">
                <img src="https://i.ibb.co/DrhMrzg/psd.png" alt="" />

                <h3>PSD To HTML</h3>
                <p className="paragraph3">
                  I can covert any PSD design to a responsive webpage. I use
                  HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see
                  some of my works in portfolio tab in this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
