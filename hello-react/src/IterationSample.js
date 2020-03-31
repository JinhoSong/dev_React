import React, { useState } from 'react';

var numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => num * num);
console.log(result);
//ES6 문법사용

/*
var processed = numbers.map(function(num){
    return num*num;
});
console.log(processed);
*/
/*
const IterationSample = () => {
  return (
    <ul>
      <li>눈사람</li>
      <li>얼음</li>
      <li>눈</li>
      <li>바람 </li>
    </ul>
  );
};
*/
/*
const IterationSample = () => {
  const names = ['1', '2', '3', '4'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};
*/
/*
const articleList = articles.map(article => (
  <article title={article.title} writer={article.writer} key={article.id} />
));*/

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 3, text: '3' },
    { id: 4, text: '4' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  // 새로운 항목을 추가할때

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1); //nextId값에 1을 더해주고
    setNames(nextNames); //names값을 업데이트한다
    setInputText('');
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id); // 같은 아이디를 제외한걸 보여준다.
    setNames(nextNames);
  };
  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
//추가 + 더블클릭시 사라지게 만든다
export default IterationSample;
