import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div class="nav-wrapper white">
            <Link to="/" class="brand-logo center black-text">
              LMUFoods
            </Link>
            <a href="#!" className="sidenav-trigger" data-target="mobile-demo">
              <i className="material-icons black-text"> menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down black-text">
              <li>
                <Link to="/" className="black-text">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Bookings" className="black-text">
                  Bookings
                </Link>
              </li>
              <li>
                <Link to="/Account" className="black-text">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
