import React, { Component } from "react";
import Typed from "react-typed";
class FoodHero extends Component {
  render() {
    return (
      <div>
        <div className="food__hero green">
          <div className="hero__content">
            <div className="typed__text2">
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
          </div>
        </div>
      </div>
    );
  }
}
export default FoodHero;
