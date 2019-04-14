import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landingpage extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Questioner App</h1>
                <p className="lead">
                  Questioner helps the meetup organizer prioritize questions to
                  be answered
                </p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;
