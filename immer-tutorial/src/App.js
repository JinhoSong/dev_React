import React, { useRef, useCallback, useState } from "react";

const App = () => {

  const nextId =useRef(1); 
  return (
    <div>
      <input type="text" value="아이디"></input>
      <input type="text" value="이름"></input>
    </div>
  );
};

export default App;
