import React from "react";
import "./Footer.css";
import comment1 from "./Images/okieup.png";
import comment2 from "./Images/okiemiddle.png";
import comment3 from "./Images/okiedown1.png";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="">
          <footer
            class="text-center text-white"
            style={{ backgroundColor: "#FDE7D4" }}
          >
            <div class="container ">
              <section class="">
                <div class="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-12 col-sm-12 my-1 hh">
                    <img src={comment1} alt="comment" id="comment" />
                  </div>
                  <div class="col-lg-6">
                    <div class="ratio ratio-16x9 my-5">
                      <iframe
                        class="shadow-1-strong rounded my-1"
                        src="https://www.youtube.com/embed/joviassJMj4"
                        title="YouTube video"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12 my-1">
                    <img src={comment2} alt="comment" id="comment" />
                  </div>
                  <div class="col-lg-6">
                    <div class="ratio ratio-16x9 my-5">
                      <iframe
                        class="shadow-1-strong rounded my-1"
                        src="https://www.youtube.com/embed/F4wPzwzPorE"
                        title="YouTube video"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12 my-1">
                    <img src={comment3} alt="comment" id="comment" />
                  </div>
                </div>
              </section>
            </div>

            <div
              class="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2020 Copyright:
              <a
                class="text-white"
                href="https://www.instagram.com/okie.studio/"
              >
                Okie-Studio
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
