import React, { useState } from "react";
import Button from "../components/common/Button";
import Counter from "../components/counter/Counter";

export const PageCounter = () => {
  const [number, setNumber] = useState(0);
  console.log(useState(0));

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    console.log("되긴 하는중");
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert("누르지마 ㅇㅇ");
    }
  };
  const buttonClickFunction = () => {
    alert("ㅇㅇ");
  };
  return (
    <div>
      <Counter
        number={number}
        increase={increase}
        decrease={decrease}
      ></Counter>
      <Button type="button" clickF={buttonClickFunction} text="dd"></Button>
    </div>
  );
};
