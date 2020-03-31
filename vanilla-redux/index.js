import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
//액션의 이름을 정의 문자열 형태 안겹치게 주의!

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });
//액션 생성 함수를 작성 반드시 type값을 가지고 있어야 하마 추후 업데이트 할때 참고하고 싶은 값은 마음대로 추가 가능

const initialState = {
  toggle: false,
  counter: 0
};
//초기값 설정

//값이 안들어오면 초기값을 사용
function reducer(state = initialState, action) {
  //action.type에 따라 다르게 처리

  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
//action type에 따라 다른 일을 수행

const store = createStore(reducer);
//스토어 생성

const render = () => {
  const state = store.getState(); //현재 상태 불러오기
  //토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  //카운터처리
  counter.innerText = state.counter;
};
render();
//상태가 업데이트 될때마다 호출

store.subscribe(render);

divToggle.onClick = () => {
  store.dispatcher(toggleSwitch());
};
btnIncrease.onClick = () => {
  store.dispatcher(increase(1));
};
btnDecrease.onClick = () => {
  store.dispatcher(decrease());
};
