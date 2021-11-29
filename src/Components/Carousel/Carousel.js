import React from "react";
import { Carousel } from "react-bootstrap";

const ProjectsCarousel = ({ home, about, manage, add }) => {
  return (
    <div>
      <div className="carousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={home} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={about} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={manage} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={add} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
