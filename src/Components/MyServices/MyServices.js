import React from "react";
import "./MyServices.css";

const MyServices = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <h1 className="text-center font pt-5"> Chose I Provide</h1>
        <div className="services ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service test">
                <div>
                  <div>
                    <img src="web" alt="" />
                  </div>
                  <h3>Web Designing</h3>
                  <p className="paragrap">
                    I am expert in web designing. I can add functionality
                    besides designing a webpage. I use HTML, CSS, Bootstrap,
                    Vanilla Js, React JS for it. You can see some of my works
                    below
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service ">
                <div>
                  <img className="mern-image " src="mern" alt="" />
                  <h3>MERN Stack Developer</h3>
                  <p className="paragrap">
                    I am a MERN stack web developer. I use MongoDB for database
                    and Express JS, Node Js for server side work. You can see i
                    have done some MERN project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service">
                <div>
                  <div>
                    <img src="html" alt="" />
                  </div>
                  <h3>PSD To HTML</h3>
                  <p className="paragraph">
                    I can covert any PSD design to a responsive webpage. I use
                    HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can
                    see some of my works in portfolio tab in this website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
