import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AllProjects.css";

const AllProjects = () => {
  return (
    <>
      <h2> All Recent Projects</h2>
      <div className="row mt-3 mb-3 mx-auto containerDetails  row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        <div style={{}} className="col-md-6 col-lg-6 col-sm-12 mt-3 ">
          <Card style={{ width: "20rem" }} className="cardDetail">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/yg2ZdRw/explore.png"
            />
            <Card.Body>
              <Card.Title className="title">Maruti SuZuki Arena</Card.Title>
              <Card.Text>
                This is an Full-Stack Maruti Suzuki Cars website.User can Select
                Cars and Book for Buy also can Complete payment via Online
                payment.
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Link to="/detailsOne">
                <button className="btn btn-success">Details</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
          <Card style={{ width: "20rem" }} className="cardDetail">
            <Card.Img variant="top" src="https://i.ibb.co/XxMz4ZW/home.png" />
            <Card.Body>
              <Card.Title className="title">Tourista Travel Agency </Card.Title>
              <Card.Text>
                This is Tourista Travel service Agency, where anyone can Book
                Tourist Place and historical place and start their journey and
                Tour at any time .
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Link to="/detailsTwo">
                <button className="btn btn-success">Details</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-3 mb-3 mx-auto row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 containerDetails">
        <div style={{}} className="col mt-3">
          <Card style={{ width: "20rem" }} className="cardDetail">
            <Card.Img variant="top" src="https://i.ibb.co/MMShttX/home4.png" />
            <Card.Body>
              <Card.Title className="title">Our Code Education</Card.Title>
              <Card.Text>
                This is an Full-Stack Maruti Suzuki Cars website.User can Select
                Cars and Book for Buy also can Complete payment via Online
                payment.
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Link to="/detailsThree">
                <button className="btn btn-success">Details</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col mt-3">
          <Card style={{ width: "20rem" }} className="cardDetail">
            <Card.Img variant="top" src="https://i.ibb.co/pRxWbVg/home3.png" />
            <Card.Body>
              <Card.Title className="title">Medical-Health-Care </Card.Title>
              <Card.Text>
                In Medical-Health-Care services Anyone can visit to go to the
                health care for check up and doctor consultant .user can Login
                via Google sign, and email and password.
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Link to="/detailsFour">
                <button className="btn btn-success"> Details</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
