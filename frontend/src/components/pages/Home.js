import React from "react";
import LuberRoute from "../layouts/luberRoute";
import LMUFOOD from "../layouts/lmufoods";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m5 l5">
          <LuberRoute />
        </div>
        <div className="col s12 m2 l2">
          <h3 className="black-text center-align choice__wrapper">OR</h3>
        </div>
        <div className="col s12 m5 l5">
          <LMUFOOD />
        </div>
      </div>
    </div>
  );
};

export default Home;
