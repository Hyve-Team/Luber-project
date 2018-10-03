import React, { Component } from "react";
class Dashboard extends Component {
  render() {
    return (
      <div class="row">
        <div class="col s3">{/*side navigation panel */}</div>

        <div class="col s9">{/*page content */}</div>
      </div>
    );
  }
}

export default Dashboard;
