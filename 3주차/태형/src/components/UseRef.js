import React, { Component } from 'react';

/*
    ref 리액트 레퍼런스를 사용해야 하는 이유 : 리액트는 정말 특별한 상황이 아니라면 직접적으로 DOM 요소에 ID 값을 넣는것을 권장하지 않는다.
    같은 컴포넌트가 여러개 생성된다면 동일한 ID 값을가진 요소들이 생겨나기 때문이다. 

    그렇다면 ref는 언제 사용해야할까?
    직접적으로 DOM을 건드려야할 때 사용해야한다.

*/

//Ref를 만드는 방법

/*

    콜백 함수를 사용하는 방법

    ref 를 달고자하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 된다.

    이 콜백 함수는 ref 값을 파라미터로 전달 받고 함수 내부에서 ref 를 컴포넌트의 멤버변수로 설정한다.

    <input ref={ (ref) => {this.input = ref} } />

    //이거 잘 이해 안되네.. 

*/

/*

    createRef 함수를 사용하는 방법

    리액트 v16.3 이상

    1. 컴포넌트 내부에 멤버변수 React.createRef() 생성
        input = React.createRef();

    2. 해당 멤버 변수를 ref를 달고자하는 요소에 ref props로 넣어주면 설정 완료

    3. ref를 설정해준 DOM에 접근하려면 this.input.current
        콜백함수와 다른부분 .current

    
    
*/



// const UseRef = () => {
//     const input = React.createRef();

//     // const handleFocus = () => {
//     //     this.input.current.focus();
//     // }

//     return (
//         <div>
//             <input ref={input} />
//         </div>
//     );
// };


class UseRef extends Component{
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }
    
    render(){
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}


export default UseRef;