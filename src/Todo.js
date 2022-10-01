import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // submit 시 refresh되기 때문에 이를 방지
    // 입력이 빈값인 경우 해당 함수 종료
    if (todo === "") {
      return;
    }
    // 그렇지 않다면 입력창을 비운다
    setTodo("");
    // Array를 업데이트 하는법 -> 새로운 요소에다가, 기존의 배열의 요소들만 가져오기
    // 만약 setTodoList((currentArr) => [todo, ...currentArr]);로 하면, [[1,2,3], 4] 이런 결과 생성
    // 배열의 요소만 가져와 복사할때 배열명 앞에 ... 첨가
    setTodoList((currentArr) => [...currentArr, todo]);
  };
  console.log(todoList);

  return (
    <div>
      <h1>My Todos ({todoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="Write your todo..."
          onChange={onChange}
        ></input>
        <button>Add to TodoList</button>
      </form>
      <hr />
      {/* Map function
      map은 JS 함수로 주어진 배열의 모든 요소에 대해 주어진 함수를 진행하여 그 결과값을 배열로 반환
      첫번째로 주어지는 argument는 진행되는 순서에 대한 item을 나타냄
      */}
      <ul>
        {/* 
        JSX 구성요소 파악을 위해 key값을 부여하라고 요구, 두번째 argument는 주어진 배열의 index 
        */}
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
