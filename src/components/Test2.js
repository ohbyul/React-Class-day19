import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state , action )=> {
    switch(action.type) {
        case 'INCREMENT' : 
            return state + action.step
        case 'DECREMENT' : 
            return state - action.step
        case 'RESET' : 
            return 0
        default :
            return state
    }
}

const Test2 = () => {
    const [ count , dispatch ] = useReducer(reducer , initialState)
    return (
        <div>
            <h1> Count1 : {count} </h1>
            <p>
                <button 
                    onClick={ () => dispatch( {type:'INCREMENT' , step : 20 })} >
                    증가 : INCREMENT </button>
                <button
                    onClick={ () => dispatch( {type:'DECREMENT' , step : 20 })} >
                    감소 : DECREMENT </button>
                <button
                    onClick={ () => dispatch( {type:'RESET'})} >
                    초기화 : RESET </button>
            </p>
        </div>
    );
};

export default Test2;