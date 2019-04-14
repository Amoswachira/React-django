import React, { Component } from "react";
import { Link } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";

class AuthNavbar extends Component {
  onLogoutClick() {
    // remove the token form localstorage.
    localStorage.removeItem("jwtToken");
    // remove the authorization header.
    setAuthToken(false);
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary nav-pills">
          <div className="container">
            <Link className="nav-link active" to="/">
              React-Django-Api
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/upcommingmeetups">
                    Upcoming meetUps
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthNavbar;
