import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state , action) => {
    switch(action.type){
        case 'INCREAMENT' : 
            return state + 1    //count + 1 아니라 state로 움직인다.
        case 'DECREAMENT' : 
            return state - 1
        case 'RESET' : 
            return 0
        default : 
            return state
    }
}


const Test1 = () => {

    const [count , dispatch] = useReducer(reducer ,initialState )

    return (
        <div>
            <h2> Count : {count} </h2>
            <p>
                <button onClick = { () => dispatch({type : 'INCREAMENT'})} >증가 : INCREAMENT</button>
                <button onClick = { () => dispatch({type : 'DECREAMENT'})} >감소 : DECREAMENT</button>
                <button onClick = { () => dispatch({type : 'RESET'})} >초기화 : RESET </button>
            </p>
        </div>
    );
};

export default Test1;

/*

    const [state , dispatch] = useReducer(reducer, initialState);
    state : 상태 데이터,
    dispatch : 액션을 발생시키는 함수 ( 액션을 보내는것)
    useReducer (상태업데이트로직을 담는 함수, 초기값);

    dispatch({type : '액션명'})
    type : 필수 ! : 액션명 - 한글, 영문소문자, 영문대문자 : 주로 영문 대문자를 사용한다  ( 별명 , 별칭 )

    dispath({ type : '액션명 , 키 : 값 , 키 : 값})
    actioon.type , action.키

    funtion 함수명(state, action) { (필수)
        switch ( action.type) {
            case : '액션명' : 
                return 값;
            default : 
                return state
        }    
    }
*/