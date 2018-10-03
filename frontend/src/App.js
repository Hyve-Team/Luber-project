import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Bookings from "./components/pages/Bookings";
import Dashboard from "./components/pages/Dashboard";
import Account from "./components/pages/Account";
import Navbar from "./components/layouts/navbar";
import Home from "./components/pages/Home";
import Lmufoods from "./components/pages/Lmufoods";
import TransHistory from "./components/pages/Transhistory";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/Dashboard" exact component={Dashboard} />
        </Switch>
        <Switch>
          <Route path="/Bookings" exact component={Bookings} />
        </Switch>
        <Switch>
          <Route path="/lmufoods" exact component={Lmufoods} />
        </Switch>
        <Switch>
          <Route path="/Account" exact component={Account} />
        </Switch>
        <Switch>
          <Route path="/history" exact component={TransHistory} />
        </Switch>
      </div>
    );
  }
}

export default App;
