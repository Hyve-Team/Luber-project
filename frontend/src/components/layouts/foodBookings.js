import React, { Component } from "react";
import { Link } from "react-router-dom";
import food from "../../img/food.jpg";
import FoodSelect from "./foodSelect";
class FoodBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFood: true
    };
  }

  revealMeal = e => {
    e.preventDefault();
    this.setState({ selectFood: !this.state.selectFood });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l4">
              <div className="card waves-effect waves-light">
                <Link to="">
                  <div className="card-image">
                    <img src={food} alt=" Services" />
                    <span className="card-title black-text">
                      Book Mr Tee's Food
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card waves-effect waves-light">
                <Link to="">
                  <div className="card-image ">
                    <img src={food} alt=" Services" />
                    <span className="card-title black-text">
                      Book Kunle's Food
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card waves-effect waves-light">
                <Link to="" onClick={this.revealMeal.bind(this)}>
                  <div className="card-image">
                    <img src={food} alt=" Services" />
                    <span className="card-title black-text">
                      Book Cafeteria's Food
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* showing menu options here*/}
          {!this.state.selectFood && <FoodSelect />}
        </div>
      </div>
    );
  }
}
export default FoodBookings;
