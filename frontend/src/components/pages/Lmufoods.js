import React, { Component } from "react";
import FoodHero from "../layouts/foodHero";
import FoodBookings from "../layouts/foodBookings";
class Lmufoods extends Component {
  render() {
    return (
      <div>
        <FoodHero />
        <FoodBookings />
      </div>
    );
  }
}
export default Lmufoods;
