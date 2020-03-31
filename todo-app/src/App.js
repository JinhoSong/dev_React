import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      //text: '할 일 ${ i }', -> ` ` 이거로 묶어야 된다 이유는 뭐야 스.바
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1; // 1씩 더하기
  }, []);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);
  //아래 코드 좀 이해해야 한다.
  /*
  map은 배열을 전체적으로 새로운 형태로 변환하여 새로운 배열을 생성해야 할 때 사용
  but 지금은 하나만 수정이다
  삼항연산자 
  조건 1 : 입력한 id값과 id가 같으면 새로 객체를 생성해준다
  조건 2 : 다르면 변화없이 그대로 반환한다 
  */
  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);
  // todos =>를 앞에 넣어 주면 된다.
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
