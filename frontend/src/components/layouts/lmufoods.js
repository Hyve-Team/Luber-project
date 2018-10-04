import React from "react";
import { Link } from "react-router-dom";
import taxi from "../../img/taxi.svg";

const LMUFOOD = () => {
  return (
    <div className="lmu__foods">
      <div className="card">
        <div className="card-image waves-effect waves-light">
          <Link to="/lmufoods">
            <img src={taxi} alt="LMUfoods" />
            <span className="card-title black-text">Book Your Meal</span>
          </Link>
        </div>
        <div className="card-action">
          <Link to="/lmufoods">
            <button className="btn__hero waves-effect waves-light green center-align">
              LMUFoods
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LMUFOOD;
