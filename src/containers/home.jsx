import React, { Component } from "react";
import Signup from "../components/signUp";
import store from "./redux/store";
class Home extends Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default Home;
