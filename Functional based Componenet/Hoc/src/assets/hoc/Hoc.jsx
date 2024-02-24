import React, { useState } from 'react'

const Hoc = (WrappedComponent) => {

    // let comp
    

    // let [profile,setProfile]=useState({
    //     name:"Vinoth",
    //     age:24,
    //     company:"Fire Flink",
    //     salary:"1000000",
    //     gender:"male",
    //     city:"Bangalore",
    //     hobbies:["watching Cricket" ,"Playing Cricket"]
    // });

    return function comp(){
        return(
            <WrappedComponent profile={{name:"Vinoth",age:24,company:"Fire Flink"}}></WrappedComponent>
        )
    }
 
}

export default Hoc


//Hoc();  //Hoc is like a function that takes components as a argument and return the enhanced version of the component