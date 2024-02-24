import {createContext, useState} from 'react';

export let CounterContextApi=createContext(0);

// Create Provider and add children to the componet

const CounterProvider =({children})=>{


// setting Global variable
const [count,SetCount]=useState(0);

const Increment=()=>{
    SetCount(prevVal => prevVal+1)
}

const Decrement=()=>{
    SetCount(prevVal => prevVal-1)
}

const Reset=()=>{
    SetCount(0);
}




    return <CounterContextApi.Provider value={{count,Increment,Decrement,Reset}}>
        {children}
    </CounterContextApi.Provider>

}

export default CounterProvider;