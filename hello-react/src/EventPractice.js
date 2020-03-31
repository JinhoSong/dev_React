import React, { Component, useState } from 'react';

class EventPractice extends Component {
  const EventPractice = () => {
      const [username, setUsername] = useState(' ');
      const [message, setMessage] = useState(' ');
      const onChangeUsername = e => setUsername(e.target.value);
      const onChangeMessage = e => setMessage(e.target.value);
      const onClick = () =>{
          alert( username + ' ' + message);
          setUsername(' ');
          setMessage(' ');
      };
    }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      username: ' ',
      message: ' '
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력"
          value={username}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>확인</button>
        <br></br>

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        ></input>
        <button onClick={handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
