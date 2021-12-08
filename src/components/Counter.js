import React, { useState } from "react";
//rface
const Counter = ({ count, increase }) => {
  //   const { count, setCount } = props;
  // 구조분해할당
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increase}>올라라</button>
    </div>
  );
};
//

export default Counter;
