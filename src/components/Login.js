import React, { Component } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import Stickyfooter from "./Stickyfooter";
import setAuthToken from "../utils/setAuthToken";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const Data = {
      email: this.state.email,
      password: this.state.password
    };
    let responseMessage;
    Axios({
      url: "https://questioners-two-staging.herokuapp.com/api/auth/login/",
      data: Data,
      method: "post"
    })
      .then(res => {
        // save token to local storage
        const {token} = res.data;
        // save token to  local storage
        localStorage.setItem('jwtToken', token);
        // set token to Auth header
        setAuthToken(token);

        responseMessage = res.data.Message;
        // display response message in the alterbox.
        document.getElementById("success").innerHTML += `
            <div class="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
             <strong>${responseMessage}</strong>
            </div>
            `;
        this.props.history.push('/upcommingmeetups');
      })
      .catch(error => {
        if (error.response.data["detail"]) {
          responseMessage = error.response.data["detail"];
          // display the error message in the alter box
          document.getElementById("success").innerHTML += `
                <div class="alert alert-dismissible alert-warning">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>${responseMessage}</strong>
                </div>
                `;
        }
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="offset-md-3 col-md-6 offset-md-3">
              <br />
              <br />
              <br />
              <br />
              <br />
              <center>
                <h1>Login</h1>
              </center>
              <div id="success" />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-outline-success"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Stickyfooter />
      </div>
    );
  }
}

export default Login;
