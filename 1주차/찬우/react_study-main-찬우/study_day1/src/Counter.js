import React from "react";

const Counter = (props) => {
  const { number, increase, decrease, increaseText, decreaseText } = props;
  return (
    <>
      <button onClick={increase}>{increaseText}</button>
      <button onClick={decrease}>{decreaseText}</button>
      <span>{number}</span>
    </>
  );
};

export default Counter;
