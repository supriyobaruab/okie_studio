import "./Member.css";
import React from "react";
import mom from "./Images/mom.png";
export default function Mom() {
  return (
    <div className="lekha">
      <h1 className="text-center">Members</h1>
      <div className="d-flex justify-content-center">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="mom"
                src={mom}
                alt="Avatar"
                style={{ width: "300px", height: "450px" }}
              />
            </div>
            <div className="flip-card-back">
              <div className="information">
                <h2 className="card-title">Kristy</h2>
                <p className="card-sub-title">The Mother</p>
                <p className="card-info">
                  That one popular friend in the group. Very ambitious, very
                  passionate and a hard worker. Has natural leadership energy
                  <br />
                  but goes crazy in the house party. A great advisor and a
                  respectful person.
                </p>
                <button className="btn">
                  <a
                    href="https://www.facebook.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Learn more
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
