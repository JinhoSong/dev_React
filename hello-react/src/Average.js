import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  if (numbers.length === 0) return 0; //없으면 0반환
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]); // number혹은 list가 바뀌었을 때만 함수 생성

  /* 
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };
  */
  //useMemo를 이용 렌더링하는 과정에서 특정값이 바뀌었을때만 연산을 실행한다. 원하는 값이 바뀌지 않았다면 이전에 결과를 다시 사용한다
  //input의 내용이 바뀔떄는 렌더링을 다시하지 않는다

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
