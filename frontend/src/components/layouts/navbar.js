import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper white">
            <a href="#" class="brand-logo center black-text">
              Luber
            </a>
            <a href="#!" className="sidenav-trigger" data-target="mobile-demo">
              <i className="material-icons black-text"> menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down black-text">
              <li>
                <a href="sass.html" className="black-text">
                  Sass
                </a>
              </li>
              <li>
                <a href="badges.html" className="black-text">
                  Components
                </a>
              </li>
              <li>
                <a href="collapsible.html" className="black-text">
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
