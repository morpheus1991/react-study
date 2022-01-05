import React from "react";

/*
    async await : 향상된 비동기 프로그래밍
    1. promise의 then 체이닝 보다 가독성 좋아짐
    2. promise를 완전 대채하지는 않음
    3. promise는 비동기 상태를 값으로 다룰 수 있음. async await 보다 큰 개념
    4. async await 함수는 promise 를 반환함. 
    
*/

// const sum = () => {
const sssss = async () => {
  const aaaa = await setTimeout(() => 5, 5000);
  console.log(aaaa);
};

const AsyncAwait = () => {
  // async function getDate() { //promise 반환
  //     return 123;
  // }

  // getDate().then(data => console.log(data)); // async 로 정의된 함수는 항상 promise 를 반환하기 때문에 then 메서드를 사용할 수 있음.

  // async function getData1() {
  //     return Promise.resolve(123);
  //     //함수 내부에서 promise 를 반환
  // }

  // getData1().then(data => console.log(data));

  // async function getData2() {
  //     throw new Error('123');
  // }

  // getData2.catch(error => console.log(error));

  /*
        await 키워드를 사용하는 방법

        await 키워드는 비동기 처리 하나당 하나씩 사용할 수 있나봄 이걸 사용하면 이 비동기 처리가 끝날때까지 다른 비동기는 처리하지 않나봄 비동기 모아놓는곳이 어디랬더라 힙 스택 큐 중에 하난데.. 
        
        1. await 키워드는 async함수 내부에서 사용함
        2. await 키워드 우측에 promise 를 사용하면 그 프로미스가 처리됨 상태가 될 때까지 기다린다.
        3. 오직 async 함수 내에서만 사용이 가능하다.
    */

  // function requestData(v){
  //     return new Promise( resolve => setTimeout(() => {console.log(`requestdata : ${v}`); resolve(v);}, 1000 ));
  // }

  // async function getData() {
  //     const data1 = await requestData(10); //async 밖에선 사용 불가능
  //     const data2 = await requestData(20);
  //     console.log(data1, data2); //await 처리된 코드가 실행되기 전까진 실행되지 않는다.
  //     return [data1,data2];
  // }

  // getData();

  /*
        promise 와 async 로 같은 기능을 구현한 코드 ( 비교하기 )

        비동기함수간의 의존성이 높아질수록 promise 와 async 의 가독성 차이는 극명하게 드러난다.
    */

  // //promise로 작성한 함수
  // function getDataPromise(){
  //     asyncFunc1()
  //     .then(data => {
  //         console.log(data);
  //         return asyncFunc2();
  //     }).then(data => {
  //         console.log(data);
  //     });
  // }

  // //async로 작성한 함수
  // function getDataAsync(){
  //     const data1 = await asyncFunc1();
  //     console.log(data1);
  //     const data2 = await asyncFunc2();
  //     console.log(data2);
  // }

  /*

    의존성이 강한 코드에서 비교하기

    */
  // function getDataPromise(){
  //     return asyncFunc1()
  //             .then(data1 => Promise.all([data1, asyncFunc2(data1)]))
  //             .then((data1, data2) => {
  //                 return asyncFunc3(data1, data2);
  //             });
  // }

  // async function getDataAsync(){
  //     const data1 = await asyncFunc1();
  //     const data2 = await asyncFunc2(data1);
  //     return asyncFunc3(data1, data2);
  // }

  /*
        비동기 함수를 병렬로 실행하기
    */

  //순차적으로 실행되는 코드
  async function getData() {
    const data1 = await asyncFunc1();
    const data2 = await asyncFunc2();
    // await 를 사용했기 때문에 순차적으로 실행됨
  }

  //아래와 같이 await 키워드를 나중에 사용하면 병렬실행되는 코드이다. 병렬실행이면 각각 따로 동작한다는건가? 그럼 굳이 이 기능을 쓸 필요가 있나..
  async function getData() {
    const p1 = asyncFunc1();
    const p2 = asyncFunc2();

    const data1 = await p1;
    const data2 = await p2;
  }

  return <div></div>;
};

export default AsyncAwait;
