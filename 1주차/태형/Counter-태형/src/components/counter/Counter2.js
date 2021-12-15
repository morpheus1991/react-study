import React from "react";

const Counter = (props) => {
  const { num, increse, decrese } = props;
  return (
    <section>
      <div className="counter_title">
        <h4>Counter</h4>
      </div>
      <div className="counter_content">{num}</div>
      <div className="counter_btn_box">
        <button className="increse_btn" onClick={increse}>
          증가
        </button>
        <button className="increse_btn" onClick={decrese}>
          감소
        </button>
      </div>
    </section>
  );
};

// const counter = (num, increase, decrease) => {
//   return increase(num + 1);
// };
export default Counter;
