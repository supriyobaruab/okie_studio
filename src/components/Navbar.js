import "./Navbar.css";
import React from "react";
// import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark px-5 ">
        <div className="container-fluid px-0 ">
          <a className="navbar-brand fs-1" href="#first-page">
            O<span>G</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ms-auto">
              <li className="nav-item active">
                <a
                  className="nav-link fs-5"
                  aria-current="page"
                  href="#first-page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#second">
                  Member
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#carouselExampleControls">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#footer">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
