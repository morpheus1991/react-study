import React from "react";

const Button = ({ type, clickF, text }) => {
  return (
    <button type={type} onClick={clickF}>
      {text}
    </button>
  );
};

export default Button;
