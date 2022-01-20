import React, { useState, useEffect } from "react";

const A1 = () => {
  const [state, setState] = useState(0);
  const [state1, setState2] = useState(0);

  useEffect(() => {
    const a = () => {
      document.querySelector(".ddddd").style.color = "red";
    };
    window.addEventListener("click", a);
    return () => {
      window.removeEventListener("click", a);
    };
  }, []);

  return <div className="ddddd">{state}</div>;
};

export default A1;

[{},{},{},{}]


//인풋에 텍스트 드가야함
//인풋벨류를 li에 넣어줌
//li에 key 필요, 