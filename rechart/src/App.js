import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleLineChart from "./view/SimpleLineChart";
import SpecifiedDomainRadarChart from "./view/SpecifiedDomainRadarChart";
import Test from "./view/Test";
import Example from "./view/Example";
function App() {
  return (
    <div>
      <Test />

      <Example />
    </div>
  );
}

export default App;
