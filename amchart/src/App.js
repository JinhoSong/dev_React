import React from "react";

import TestChart from "./components/TestChart";
import Test from "./components/Test";
import SunburstChart from "./components/SunburstChart";
import ZoomRadorChart from "./components/ZoomRadorChart";

const data = () => {
  const data = [];
  let price1 = 1000;
  for (let i = 0; i < 10; i++) {
    price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
    data.push({ date1: new Date(2015, 0, i), price1 });
  }

  return data;
};

const App = (props) => {
  return (
    <>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <SunburstChart />
      </div>
    </>
  );
};

export default App;
