import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PageCounter from "./pages/pageCounter";

function App() {
  // 초기값 0 셋팅 useState() 함수에 넣은 매개변수는 배열에 첫번째 변수명에 할당된다.

  return (
    <div className="App">
      <PageCounter></PageCounter>
    </div>
  );
}

export default App;
