import React, { useState } from "react";
import Counter from "./Counter";

const PageCounter = () => {
  const [number, setNumber] = useState(0);
  const increaseText = "+1";
  const increase = () => {
    setNumber(number + 1);
    alert("1증가되었습니다.");
  };
  const decreaseText = "-1";
  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert("0보다 작은순 없어!");
    }
  };

  return (
    <>
      <Counter
        number={number}
        increase={setNumber}
        decrease={decrease}
        increaseText={increaseText}
        decreaseText={decreaseText}
      ></Counter>
    </>
  );
};

export default PageCounter;
