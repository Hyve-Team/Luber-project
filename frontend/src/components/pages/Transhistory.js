import React, { Component } from "react";
import TransportNavigation from "../layouts/transportNav";
class TransHistory extends Component {
  render() {
    return (
      <div>
        <TransportNavigation />
        <div className="container">
          <ul
            className="collection with-header"
            style={{ "margin-top": "5em" }}
          >
            <li className="collection-header green white-text">
              <h4>Recent Transactions</h4>
            </li>
          </ul>

          <table className="highlight striped">
            <thead>
              <tr>
                <th>Driver's Name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>24/07/2018</td>
                <td>3:00pm</td>
              </tr>
              <tr>
                <td>Bode Thomos</td>
                <td>24/07/2018</td>
                <td>3:00pm</td>
              </tr>
              <tr>
                <td>Mr Isabi</td>
                <td>24/07/2018</td>
                <td>3:00pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TransHistory;
