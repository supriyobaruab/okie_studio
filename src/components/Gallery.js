import React from "react";
import "./Gallery.css";
//Importing images
import first from "./Slide/1.jpg";
// import second from "./Slide/2.jpg";
import third from "./Slide/3.jpg";
import fourth from "./Slide/4.jpg";
import fifth from "./Slide/5.jpg";
import sixth from "./Slide/6.jpg";
import seventh from "./Slide/7.jpg";
import eighth from "./Slide/8.jpg";
import ninth from "./Slide/9.jpg";
import tenth from "./Slide/10.jpg";
import eth from "./Slide/11.jpg";
import twth from "./Slide/12.jpg";
export default function Gallery() {
  return (
    <>
      <div id="lala">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={first} alt="First slide" />
            </div>
            {/* <div className="carousel-item">
            <img className="d-block w-100" src={second} alt="Second slide" />
          </div> */}
            <div className="carousel-item">
              <img className="d-block w-100" src={third} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={fourth} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={fifth} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={sixth} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={seventh} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={eighth} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={ninth} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={tenth} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={eth} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={twth} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </>
  );
}
