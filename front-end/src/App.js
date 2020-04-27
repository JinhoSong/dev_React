import React from "react";
import { Route } from "react-router-dom";

import Detail from "components/Detail/DetailPage"

function App() {
  return (
    <div>

      <Route path="/:category?" component={Detail} />;
    </div>
  );
}

export default App;
