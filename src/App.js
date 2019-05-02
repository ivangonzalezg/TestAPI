import React, { Component } from "react";
import API from "./api";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    var data = {
      email: "ivang@hotmail.com",
      password: "123166"
    };
    const response = await API.singIn(data);
    if (response.error) {
      console.log(response.error);
    } else {
      console.log(response.response);
    }
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
