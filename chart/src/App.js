import Chart from "./components/chart";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./view/main";
import Result from "./view/result";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Result />
      </div>
    );
  }
}
export default App;
