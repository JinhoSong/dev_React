import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleLineChart from "./view/SimpleLineChart";
import SpecifiedDomainRadarChart from "./view/SpecifiedDomainRadarChart";
import Test from "./view/Test";
import Example from "./view/Example";
import Image from "./view/Image";
import Navbar from "./view/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Image />
      <Test />
    </div>
  );
}

export default App;
