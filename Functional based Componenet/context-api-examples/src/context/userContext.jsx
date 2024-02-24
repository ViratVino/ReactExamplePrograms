import {createContext} from 'react';

const UserContext=createContext("");
console.log(UserContext);




//desstructured
let {Provider}=UserContext

//Provider

const UserProvider = props=>{
    // return<UserContext.Provider>
    //     return {props.children}
    // </UserContext.Provider>

    return<Provider value={{name:"Vinoth",age:20}}>
        return {props.children}
    </Provider>


}


export default UserProvider;