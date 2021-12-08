import React, { useState } from "react";
import Counter from "../components/Counter";

const PageCounter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Counter count={count} increase={increase}></Counter>
    </div>
  );
};

export default PageCounter;
