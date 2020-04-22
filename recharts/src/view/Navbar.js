import React, { Component } from "react";
import "./Navbar.scss";
class Navbar extends Component {

  testFunction = function() {
    // content..
  }
  render() {
    return (
      <div>
        <div class="background"></div>
        <nav>
          <a class="title">빛나는 네비게이션 바</a>
          <a class="active">자꾸</a>
          <a>아찔한</a>
          <a>이</a>
          <a>느낌</a>
          <div></div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
