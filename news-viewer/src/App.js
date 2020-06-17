import React, { Component } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import Test from "./components/test"
import 'react-app-polyfill/ie11';
const App = () => {
  return (
    <div>
      <Test />
    </div>
  )

};

export default App;
