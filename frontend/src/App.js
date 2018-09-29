import React, { Component } from "react";
import { Route } from "react-router-dom";
import Bookings from "./components/pages/Bookings";
import Navbar from "./components/layouts/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Bookings} />
      </div>
    );
  }
}

export default App;
