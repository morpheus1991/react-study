// import { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import dummy from "../db/data.json";
const DayList = () => {
  console.log(dummy);
  // const [days, setDays] = useState([]);
  // // api에서 리스트 가져와서 뿌려보기
  // useEffect(() =>{
  //     console.log('클릭했다 쉐애애애리야');
  //     // 이렇게 하면 리렌더링 될 때마다 작업이 실행하게되 즉 코드가 길어지거나 그러면 다중작업이 많아짐
  //     // 하지만 의존성 배열을 사용하게 된다면 이 스테이트가 실행될 때만 실행하게 되니 이러한 부분을 방지할 수 있음
  //     fetch("http://localhost:3000/days")
  //     .then(res => {
  //         return res.json();
  //         // 여기서 리스폰스는 json이 아님
  //         // 변환하고 프라미스 반환
  //     })
  //     .then(data =>{
  //         setDays(data);
  //     });
  // }, []);

  return (
    <ul className="list_day">
      {/* 배열을 받아서 map 을 돌려주고 jsx를 돌려주면됨 */}
      {dummy.days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
        // data.json 에서 day에 객체에 대한 속성값을 가져옴
      ))}
    </ul>
  );
};

export default DayList;
