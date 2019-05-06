import React, { Component } from "react";
import API from "./api";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    var email = "ivang@hotmail.com";
    var password = "123166";
    console.time("sign");
    const response = await API.singUp(email, password);
    console.timeEnd("sign");
    console.log(response);
  }
  render() {
    return (
      <div>
        <center>
          <h1>Welcome</h1>
        </center>
      </div>
    );
  }
}

export default App;
