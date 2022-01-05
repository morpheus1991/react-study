import React, { Component } from 'react';
import './ValidationSample.css';
/*
    ref 리액트 레퍼런스를 사용해야 하는 이유 : 리액트는 정말 특별한 상황이 아니라면 직접적으로 DOM 요소에 ID 값을 넣는것을 권장하지 않는다.
    같은 컴포넌트가 여러개 생성된다면 동일한 ID 값을가진 요소들이 생겨나기 때문이다. 

    그렇다면 ref는 언제 사용해야할까?
    직접적으로 DOM을 건드려야할 때 사용해야한다.

    js,jquery에서 validate할 때 각 요소를 ID로 선택해서 검사하지만 리액트는 state로 그 기능을 구현할 수 있다.
    함수형 컴포넌트에서 해당 기능을 구현하려면  Hooks 를 사용해야 한다.
*/


// const ValidationSample = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };



class ValidationSample extends Component{
    state = {
        password : '',
        clicked: false,
        validated: false
    }
    //함수형 컴포넌트의 useState() 에 기본값을 위와 같이 할당했다.

    /*
        const [password, setPassword] = usestate('');
        const [clicked, setClicked] = usesate(false);
        const [validates, setValidated] = usestate(false);
    */

    
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    //handleChange 함수는 함수형 컴포넌트로 따지자면
    //setPassword() 함수를 이용해서 이벤트가 발생한 요소의 값을 password 변수에 할당한다. 여기서는 값이 변경되면 계속 변수에 할당중.

    /*
        handleChange = (e) => {
            setPassword(e.target.value);
        });
    }   
    */


    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }
    //handleButtonClick 함수는 검증하기 버튼을 누르면 clicked의 상태를 true로 바꿔준디.
    //validated 는 클릭했을 당시까지 쌓여온 password의 값이 0000과 같은지 평가한다. 같으면 앙 트루띠 다르면 앙 폴띠 한 값이 들어갈듯.

    /*
        handleButtonClick = () => {
            setCliked(true);
            if(this.password === '0000'){
                setVlidated(e.target.value);
            }
        }
    */

    //맞나 모르것네;;

    render(){
        return (
            <div>
                <input
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'seccess' : 'failure') : ''}
                //최종적으로 여기서 검증버튼을 눌렀는지 않눌렀는지 팜단하고 눌렀다면 벨리데이트 변수가 트루띠면 석세스 클래스 폴띠면 페일루어 클래스가 된다.
                ref = {(ref) => {this.input = ref}}
                //원리 이해불가넝.. 하 ㅂㄷㅂㄷ..
                />
                
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }

}

export default ValidationSample;