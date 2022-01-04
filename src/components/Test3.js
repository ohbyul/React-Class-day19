import React, { useReducer } from 'react';

const initialState = {width : 100}
const reducer = (state , action ) => {
    switch(action.type) {
        case 'PLUS' :
            return {
                width : state.width + action.step
            }
        case 'MINUS' : 
            return  {
                width : state.width - action.step
            }
        case 'RESET' : 
            return  {
                width : initialState.width
            }
        default : 
            return state
    }
}

const Test3 = () => {
    const [state , dispatch ] =useReducer(reducer , initialState )
    return (
        <div>
            <div style={{background : 'pink', width:state.width , height : 100, margin: 15 , transition : '0.3s'}}></div>
            <p>
                <button
                    onClick = { () => dispatch({type : 'PLUS' , step : 20 }) } >
                증가:PLUS
                </button>
                <button
                    onClick = { () => dispatch({type : 'MINUS' , step : 10 }) } >
                감소:MINUS
                </button>
                <button
                    onClick = { () => dispatch({type : 'RESET' }) } >
                    초기화:RESET
                </button>
            </p>
        </div>
    );
};

export default Test3;