import React, { Component } from "react";

class FoodSelect extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a href="#test1">OFADA RICE</a>
              </li>
              <li className="tab col s3">
                <a className="active" href="#test2">
                  BELOVED RICE
                </a>
              </li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            <div className="card">
              <div>
                <div
                  className="bg"
                  style={{ background: "green", height: "300px" }}
                />
              </div>
            </div>
          </div>
          <div id="test2" className="col s12">
            Test 2
          </div>
        </div>
      </div>
    );
  }
}
export default FoodSelect;
