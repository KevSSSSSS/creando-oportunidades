import React from "react";
import logo from "../images/Banner.png";
import Bannerimg from "../images/logo.png";

function Banner() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      ride = "true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logo} className="d-block w-100" alt="Hola"></img>
        </div>
        <div className="carousel-item">
          <img src={Bannerimg} className="d-block w-100" alt="Nel"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
