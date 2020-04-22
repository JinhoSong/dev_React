import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </form>
        <form>
          <input
            placeholder="번호"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          />
          <div>
            {this.state.name}
            {this.state.phone}
          </div>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
