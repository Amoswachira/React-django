import React, { Component } from "react";
import Navbar from "./Navbar";
import Landingpage from "./Landingpage";
import Stickyfooter from "./Stickyfooter";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landingpage />
        <Stickyfooter />
      </div>
    );
  }
}

export default App;
