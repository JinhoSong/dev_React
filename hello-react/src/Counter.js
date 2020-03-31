import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초깃값 설정하기
    this.state = {
      number: 0
    };
  }
  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회합니다.

    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출 함수 지정
          onClick={() => {
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });
            //위 코드와 아래는 완전히 똑같은 기능
            //아래는 함수에서 바로 객체 반환한다는 의미
            this.setState(prevState => ({
              number: prevState.number + 1
            }));
          }}
        >
          {' '}
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
