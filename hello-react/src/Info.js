import React, { useState, useReducer } from 'react';
import useInputs from './useInputs';
/*
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChagneNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChagneNickname} />
      </div>
      <div>
        <div>
          <b>name : {name}</b>
        </div>
      </div>
      <div>
        <div>
          <b>nickname : {nickname}</b>
        </div>
      </div>
    </div>
  );
};
*/
//위는 기본방법

//useReducer
/*
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });

  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>name : {name}</b>
        </div>
      </div>
      <div>
        <div>
          <b>nickname : {nickname}</b>
        </div>
      </div>
    </div>
  );
};
*/

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>name : {name}</b>
        </div>
      </div>
      <div>
        <div>
          <b>nickname : {nickname}</b>
        </div>
      </div>
    </div>
  );
};
export default Info;
