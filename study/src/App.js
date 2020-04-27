import React, { Component } from "react";
import "./App.css";
import Counter from "./component/Counter";
import PhoneForm from "./component/PhoneForm";
import PhoneInfoList from "./component/PhoneInfoList";
import Categories from "./component/Categories";

class App extends Component {
  id = 6;
  state = {
    information: [
      {
        id: 0,
        name: "김민준",
        phone: "010-0000-0000",
      },
      {
        id: 1,
        name: "홍길동",
        phone: "010-0000-0001",
      },
      {
        id: 2,
        name: "홍길동",
        phone: "010-0000-0001",
      },
      {
        id: 3,
        name: "홍길동",
        phone: "010-0000-0001",
      },
      {
        id: 4,
        name: "홍길동",
        phone: "010-0000-0001",
      },
      {
        id: 5,
        name: "홍길동",
        phone: "010-0000-0001",
      },
    ],

  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    });
  };
  render() {
    return (
      <div>
        <Categories />
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information} test={0} />
      </div>
    );
  }
}

export default App;
