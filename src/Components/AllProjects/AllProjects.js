import React from "react";
import { Link } from "react-router-dom";
import "./AllProjects.css";
import doralImg from "../../images/doral/signup.jpeg";
import cureImg from "../../images/cureBridge/curehome.jpeg";

const AllProjects = () => {
  return (
    <>
      <h2> All Recent Projects</h2>

      <div class="row row-cols-1 row-cols-md-3 g-4 mb-3 mx-auto">
        <div class="col">
          <div
            class="card cardDetail"
            style={{ width: "20rem" }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={doralImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title title">Doral Health Care</h5>
              <p class="card-text">
                {" "}
                This is an Full-Stack Doral Health Care website.User can take
                Appointment and Book Seat also can Complete payment via Online
                payment.
              </p>

              <Link to="/doralHealth">
                <button className="btn btn-success">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card cardDetail"
            style={{ width: "20rem" }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={cureImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title title">CureBridge Health </h5>
              <p class="card-text">
                {" "}
                This is an Full-Stack Doral Health Care website.User can take
                Appointment and Book Seat also can Complete payment via Online
                payment.
              </p>

              <Link to="/cureBridge">
                <button className="btn btn-success">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card cardDetail"
            style={{ width: "20rem" }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={cureImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title title">CureBridge Health </h5>
              <p class="card-text">
                {" "}
                This is an Full-Stack Doral Health Care website.User can take
                Appointment and Book Seat also can Complete payment via Online
                payment.
              </p>

              <Link to="/cureBridge">
                <button className="btn btn-success">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card cardDetail"
            style={{ width: "20rem" }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="https://i.ibb.co/yg2ZdRw/explore.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title title">Maruti SuZuki Arena</h5>
              <p class="card-text">
                {" "}
                This is an Full-Stack Maruti Suzuki Cars website.User can Select
                Cars and Book for Buy also can Complete payment via Online
                payment.
              </p>

              <Link to="/detailsOne">
                <button className="btn btn-success">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card cardDetail"
            style={{ width: "20rem" }}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              src="https://i.ibb.co/XxMz4ZW/home.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title title">Tourista Travel Agency </h5>
              <p class="card-text">
                This is Tourista Travel service Agency, where anyone can Book
                Tourist Place and historical place and start their journey and
                Tour at any time .
              </p>
              <Link to="/detailsTwo">
                <button className="btn btn-success">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card cardDetail"
            style={{ width: "20rem" }}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img
              class="card-img-top"
              src="https://i.ibb.co/MMShttX/home4.png"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title title">Our Code Education</h5>
              <p class="card-text">
                {" "}
                This is an Full-Stack Code Learning related website.User can
                Select Courses and Book courses for advance learning also can
                also contact by online form Fill up .{" "}
              </p>
              <Link to="/detailsFour">
                <button className="btn btn-success"> Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card cardDetail"
            style={{ width: "20rem" }}
            data-aos="fade-down-right"
          >
            <img
              src="https://i.ibb.co/pRxWbVg/home3.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title title">Medical-Health-Care</h5>
              <p class="card-text">
                {" "}
                In Medical-Health-Care services Anyone can visit to go to the
                health care for check up and doctor consultant .user can Login
                via Google sign, and email and password.
              </p>

              <Link to="/detailsThree">
                <button className="btn btn-success">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
