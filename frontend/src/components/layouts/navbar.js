import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransportNavigation from "./transportNav";
import HomeNavigation from "./homeNav";
import FoodNavigation from "./foodNav";
class Navbar extends Component {
  state = {};
  render() {
    let Navigation;
    if (window.location.pathname === "/") {
      Navigation = <HomeNavigation />;
    } else if (window.location.pathname === "/Bookings") {
      Navigation = (
        <div>
          <TransportNavigation />
        </div>
      );
    } else if (window.location.pathname === "/lmufoods") {
      Navigation = <FoodNavigation />;
    }
    const sidemain = (
      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/Account">Account</Link>
        </li>
        <li>
          <Link to="/History">Transaction History</Link>
        </li>
      </ul>
    );
    const sideBarFood = (
      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/Account">Sign In</Link>
        </li>
      </ul>
    );

    return (
      <div>
        {Navigation}
        {window.location.pathname === "/Bookings" ? sidemain : sideBarFood}
      </div>
    );
  }
}
export default Navbar;
