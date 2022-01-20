//import React, { useState } from 'react';
import { useReducer, useState } from "react";
import { numberReducer } from "../reducers/number";

const Counter = () => {
  const [number, numberDispatch] = useReducer(numberReducer, { value: 0 });
  return (
    <div className="counter_box">
      <p>
        현재 카운터 값은 <b>{number.value}</b>입니다.
      </p>
      <button
        onClick={() => numberDispatch({ type: "INCREMENT", payload: 100 })}
      >
        {" "}
        +1{" "}
      </button>
      <button onClick={() => numberDispatch({ type: "DECREMENT" })}>
        {" "}
        -1{" "}
      </button>
    </div>
  );
};

export default Counter;
