import React from "react";

export default function Members(props) {
  return (
    <div className="container my-5 members">
      <div className="row gx-5 gy-5 mx-auto px-2">
        {/* second col */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="mom"
                  src={props.firstPerson}
                  alt="Avatar"
                  style={{ width: "300px", height: "450px" }}
                />
              </div>
              <div className="flip-card-back">
                <div className="information">
                  <h2 className="card-title">{props.Ftitle}</h2>
                  <p className="card-sub-title">{props.Fsubtitle}</p>
                  <p className="card-info">{props.Finfo}</p>
                  <button className="btn">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd col */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="mom"
                  src={props.secondPerson}
                  alt="Avatar"
                  style={{ width: "300px", height: "450px" }}
                />
              </div>
              <div className="flip-card-back">
                <div className="information">
                  <h2 className="card-title">{props.Stitle}</h2>
                  <p className="card-sub-title">{props.Ssubtitle}</p>
                  <p className="card-info">{props.Sinfo}</p>
                  <button className="btn">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4th col */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="mom"
                  src={props.thirdPerson}
                  alt="Avatar"
                  style={{ width: "300px", height: "450px" }}
                />
              </div>
              <div className="flip-card-back">
                <div className="information">
                  <h2 className="card-title">{props.Ttitle}</h2>
                  <p className="card-sub-title">{props.Tsubtitle}</p>
                  <p className="card-info">{props.Tinfo}</p>
                  <button className="btn">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rowrow */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="mom"
                  src={props.fourthPerson}
                  alt="Avatar"
                  style={{ width: "300px", height: "450px" }}
                />
              </div>
              <div className="flip-card-back">
                <div className="information">
                  <h2 className="card-title">{props.Fftitle}</h2>
                  <p className="card-sub-title">{props.Ffsubtitle}</p>
                  <p className="card-info">{props.Ffinfo}</p>
                  <button className="btn">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* row end */}
    </div>
  );
}
