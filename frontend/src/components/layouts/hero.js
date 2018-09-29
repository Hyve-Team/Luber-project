import React from "react";
import taxi from "../../img/taxi.svg";
import Typed from "react-typed";

const HeroSection = () => {
  return (
    <div className="hero__section">
      <div className="row">
        <div className="col s6">
          <div className="img__wrapper">
            <img src={taxi} alt="" className="responsive-img" />
          </div>
        </div>
        <div className="col s6">
          <div className="">
            <div className="typed__text">
              <Typed
                strings={[
                  "Search for products",
                  "Search for categories",
                  "Search for brands"
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <button className="waves-effect waves-light btn btn__hero green center-align">
              {" "}
              Start Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
