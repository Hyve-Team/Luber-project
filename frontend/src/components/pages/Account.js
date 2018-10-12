import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/user.svg";
class Account extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m12 l12">
          <div className="container">
            <div className="card card__form">
              <div className="top__section green">
                <div className="facebook">
                  <Link className="fa fa-facebook" to="#" />
                </div>
              </div>
              <div className="avatar">
                <img
                  src={avatar}
                  alt="user avatar"
                  className="circle responsive-img"
                />
              </div>
              <div className="card-content">
                <form action="">
                  <div className="input-field">
                    <label htmlFor="password" className="active">
                      Current Password:
                    </label>
                    <input type="text" id="password" className="validate" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="newPass" className="active">
                      New Password:
                    </label>
                    <input type="text" id="name" className="validate" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="newPassCheck" className="active">
                      Re-Type Password:
                    </label>
                    <input type="text" id="newPassCheck" className="validate" />
                  </div>
                  <button className="waves-effect waves-light btn__hero green">
                    {" "}
                    Change
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Account;
