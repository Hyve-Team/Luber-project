import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";
class Cards extends Component {
  styles = {
    imgMax: {
      width: "300px",
      height: "300px"
    }
  };
  render() {
    return (
      <div className="drivers__section">
        <div className="container">
          <header className="header__wrapper">
            <h2 className="black-text center-align"> Pick A Ride.</h2>
            <hr className="custom__line" />
          </header>
          <div className="card__container">
            <div className="card horizontal z-depth-2 card__rounded">
              <div className="row">
                <div className="col s12 m6 l6">
                  <div className="card-img">
                    <img
                      src={avatar}
                      alt=""
                      className="responsive-img circlRe"
                      style={this.styles.imgMax}
                    />
                  </div>
                </div>
                <div className="col s12 m6 l6">
                  <div className="card-stacked">
                    <div className="card-content">
                      <h4 className="grey-text">Mr Bode Thomos</h4>
                      <div className="divider" />
                      <ul>
                        <li>
                          {" "}
                          <h5>Color: Red</h5>
                        </li>
                        <li className="grey-text">
                          {" "}
                          <h5>Brand: Toyota</h5>
                        </li>
                        <li className="grey-text">
                          {" "}
                          <h5>Capacity: 5 Sitters</h5>
                        </li>
                        <li className="grey-text">
                          {" "}
                          <h5>Model: Corolla 2016</h5>
                        </li>
                      </ul>
                      <ul id="star__rating">
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="he's bad"
                            data-value="1"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="fair"
                            data-value="2"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          {" "}
                          <i
                            className="material-icons black-text star"
                            title="Just There"
                            data-value="3"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="Good"
                            data-value="4"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="correct Driver"
                            data-value="5"
                          >
                            star_border
                          </i>
                        </li>
                      </ul>
                      <h5 className="grey-text"> Capacity: 3/5</h5>
                      <div className="progress">
                        <div className="determinate" style={{ width: "70%" }} />
                      </div>
                      <Link
                        to=""
                        className="btn__book green waves-effect waves-light center-align"
                      >
                        {" "}
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/*  end of card*/}
            <div className="card horizontal z-depth-2 card__rounded">
              <div className="row">
                <div className="col s12 m6 l6">
                  <div className="card-img">
                    <img
                      src={avatar}
                      alt=""
                      className="responsive-img circlRe"
                      style={this.styles.imgMax}
                    />
                  </div>
                </div>
                <div className="col s12 m6 l6">
                  <div className="card-stacked">
                    <div className="card-content">
                      <h4 className="grey-text">Mr Bode Thomos</h4>
                      <div className="divider" />
                      <ul>
                        <li>
                          {" "}
                          <h5>Color: Red</h5>
                        </li>
                        <li className="grey-text">
                          {" "}
                          <h5>Brand: Toyota</h5>
                        </li>
                        <li className="grey-text">
                          {" "}
                          <h5>Capacity: 5 Sitters</h5>
                        </li>
                        <li className="grey-text">
                          {" "}
                          <h5>Model: Corolla 2016</h5>
                        </li>
                      </ul>
                      <ul id="star__rating">
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="he's bad"
                            data-value="1"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="fair"
                            data-value="2"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          {" "}
                          <i
                            className="material-icons black-text star"
                            title="Just There"
                            data-value="3"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="Good"
                            data-value="4"
                          >
                            star_border
                          </i>
                        </li>
                        <li>
                          <i
                            className="material-icons black-text star"
                            title="correct Driver"
                            data-value="5"
                          >
                            star_border
                          </i>
                        </li>
                      </ul>
                      <h5 className="grey-text"> Capacity: 3/5</h5>
                      <div className="progress">
                        <div className="determinate" style={{ width: "70%" }} />
                      </div>
                      <Link
                        to=""
                        className="btn__book green waves-effect waves-light center-align"
                      >
                        {" "}
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
