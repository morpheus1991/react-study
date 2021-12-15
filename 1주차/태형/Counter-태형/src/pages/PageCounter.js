import React from "react";
import { useState } from "react";
import Button from "../components/common/Button";
import Counter from "../components/counter/Counter";
const PageCounter = () => {
  const [num, setNum] = useState(0);

  const increse = () => {
    setNum(num + 1);
  };

  const decrese = () => {
    num > 0 ? setNum(num - 1) : setNum(0);
  };
  const a = () => {
    alert("ddd");
  };
  return (
    <>
      <Button type="button" clickF={a} text="버튼임"></Button>
      <Counter num={num} increse={increse} decrese={decrese}></Counter>;
    </>
  );
};

export default PageCounter;
