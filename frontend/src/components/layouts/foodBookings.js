import React, { Component } from "react";
import { Link } from "react-router-dom";
import food from "../../img/food.jpg";
class FoodBookings extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="card waves-effect waves-light">
                <Link to="">
                  <div className="card-image">
                    <img src={food} />
                    <span className="card-title">Book Mr Tee's Food</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="card waves-effect waves-light">
                <Link to="">
                  <div className="card-image">
                    <img src={food} />
                    <span className="card-title">Book Kunle's Food</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="card waves-effect waves-light">
                <Link to="">
                  <div className="card-image">
                    <img src={food} />
                    <span className="card-title">Book Cafeteria's Food</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodBookings;
