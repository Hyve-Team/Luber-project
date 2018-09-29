import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div class="nav-wrapper white">
              <a href="#" class="brand-logo center black-text">
                Luber
              </a>
              <a
                href="#!"
                className="sidenav-trigger"
                data-target="mobile-demo"
              >
                <i className="material-icons black-text"> menu</i>
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down black-text">
                <li>
                  <a href="sass.html" className="black-text">
                    Home
                  </a>
                </li>
                <li>
                  <a href="badges.html" className="black-text">
                    Bookings
                  </a>
                </li>
                <li>
                  <a href="collapsible.html" className="black-text">
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">Bookings</a>
          </li>
          <li>
            <a href="collapsible.html">Account</a>
          </li>
          <li>
            <a href="mobile.html">History</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
