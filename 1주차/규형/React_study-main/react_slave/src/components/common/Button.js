import React from "react";

const Button = ({ type, clickF, text }) => {
  return (
    <div>
      <div>sss</div>
      {text && (
        <button type={type} onClick={clickF}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
