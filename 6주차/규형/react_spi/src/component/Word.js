import React, { useState } from "react";

const Word = ({ wordContents }) => {
  const [isShow, setIsShow] = useState(wordContents.isShow);
  const [isDone, setIsDone] = useState(wordContents.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const setDone = () => {
    setIsShow(false);
    setIsDone((prev) => !prev);
  };
  const setDo = () => {
    setIsShow(true);
    setIsDone((prev) => !prev);
  };

  return (
    <tr key={wordContents.id} className={isDone ? "off" : ""}>
      <td>
        <input
          type="checkbox"
          checked={isDone}
          onClick={isDone ? setDo : setDone}
        />
      </td>
      <td>{wordContents.eng}</td>
      <td>{isShow && wordContents.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del">삭제</button>
        {/* 문서 비구조화 할당을 위해  */}
      </td>
    </tr>
  );
};

export default Word;
