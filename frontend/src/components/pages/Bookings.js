import React, { Component } from "react";
import Footer from "../layouts/footer";
import HeroSection from "../layouts/hero";
import Cards from "../layouts/cards";
class Bookings extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <Cards />
        <Footer />
      </div>
    );
  }
}
export default Bookings;
