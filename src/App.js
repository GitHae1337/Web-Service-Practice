import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

// Component는 JSX를 return하는 하나의 함수에 불과함
function Start() {
  useEffect(() => {
    // component가 생성될때 진행
    console.log("Creation :)");
    // return값을 주는 경우 component가 삭제될때에 실행됨
    return () => console.log("Destruction :(");
  }, []);

  return <h1>Hello</h1>;
}
// 윗부분과 동일 코드 -> 함수 2개로 구분
// function Start() {
//   useEffect(() => {
//     // 현재 dependency에 있는 state가 변화할때 실행 (여기는 아무것도 없어서 맨처음에 한번만 실행)
//     console.log("start");
//     // 이때 return 값이 있으면 Component가 삭제될때 return하는 함수 실행
//     return Finish;
//   }, []);
//   return (
//     <h1>Hello</h1>
//   );
// }
// function Finish(){
//   console.log("finish");
// }

function App() {
  // const [counter, setValue] = useState(0);
  // const onClick = () => setValue((prev) => prev + 1);

  // const [keyword, setKeyword] = useState("");
  // // onChange에 event에 입력된 value 값으로 keyword 값 설정
  // const onChange = (event) => setKeyword(event.target.value);

  // // useEffect를 통해 주어진 function을 맨 처음 한번만 실행하도록 함
  // useEffect(() => {
  //   console.log("Run only ONCE");
  // }, []);
  // // 하지만 주어진 state가 변화할때만 실행하고 싶은 경우 []안에 state를 나타내는 변수 삽입
  // // 만약 console을 밖에다 찍으면 state가 변화 즉, counter가 변화할때도 console을 찍어댐
  // useEffect(() => {
  //   console.log(`Run when ${keyword} changes`);
  // },[keyword]);
  // // Counter 값이 변화할때만 실행
  // useEffect(() => {
  //   console.log(`Run when ${counter} changes`);
  // },[counter]);

  // return (
  //   <div>
  //     <h1 className={styles.title}>Welcome back!</h1>
  //     <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
  //     <h2>counter: {counter}</h2>
  //     <button onClick={onClick}>Continue</button>
  //   </div>
  // );

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Start /> : null}
    </div>
  );
}

export default App;
