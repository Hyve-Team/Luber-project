import React from "react";
import { Link } from "react-router-dom";
import taxi from "../../img/taxi.svg";
const LuberRoute = () => {
  return (
    <div className="luber__route">
      <div className="card">
        <div className="card-image waves-effect waves-light">
          <Link to="/Bookings">
            <img src={taxi} alt="LMUtransit" />
            <span className="card-title black-text">Book a shuttle</span>
          </Link>
        </div>
        <div className="card-action">
          <Link
            to="/Bookings"
            className="btn waves-effect waves-light green center-align1 ASTRYUIOP[]
            "
          >
            LMUtransit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LuberRoute;
