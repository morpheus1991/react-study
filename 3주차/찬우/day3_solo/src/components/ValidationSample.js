import React, { useRef, useState } from "react";
import "../common/ValidationSample.css";

const ValidationSample = () => {
  const a = [1, 23, 4];
  const [password, setPassword] = useState("");
  const [isOpen, setIsopen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);
  const inputRef = useRef();
  const inputRef2 = useRef(0);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === Number("0000"));
    inputRef.current.focus();
  };
  const handleReset = () => {
    setPassword("");
    setClicked(false);
    inputRef.current.focus();
  };

  return (
    <div>
      <ul>
        {a.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </ul>
      <p>규형이의 비밀번호는 {password ? password : "없다"}</p>
      <button
        onClick={() => {
          setIsopen(true);
        }}
      >
        open
      </button>

      <button
        onClick={() => {
          setIsopen(false);
        }}
      >
        close
      </button>

      <div style={{ background: isOpen ? "red" : "blue" }}>ddd</div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
        ref={inputRef}
      />
      <button onClick={handleButtonClick}>검증하기</button>
      <button onClick={handleReset}>지우기</button>
      <button
        onClick={() => {
          console.log(inputRef.current.classList.add("on"));
        }}
      >
        ddd
      </button>
    </div>
  );
};

export default ValidationSample;
