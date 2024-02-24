import { createContext, useContext, useEffect, useReducer } from "react";
import UserReducer from "../reducer/UserReducer/UserReducer";
import { User_API_Instance } from "../AxioseInstance/UserAxiosInstances";

export const UserContextApi=createContext();



const initalState={
    users:[],
    isLoading:false,
    singleUser:null
}


const UserProvider =({children})=>{
    let [users,dispatch]=useReducer(UserReducer,initalState);
  
    let fetchUsers=async()=>{
        let {data}=await User_API_Instance.get('/users');
        // console.log(data);
        dispatch({type:"FETCH",payload:{data}})
    }


    const fetchSingleUser =async (id)=>{
      try {
        let {data}=await User_API_Instance.get(`/users/${id}`);
        dispatch({type:'SINGLE_USER',singleUser:data})
      } catch (error) {
        console.log(error);
      }

    }
    


    return<UserContextApi.Provider value={{users,fetchUsers,fetchSingleUser}}>
        {children}
        </UserContextApi.Provider>
}




// export const allUsers=useContext(UserContextApi);    // here we cant use because hooks only called inside the function body

//Custom Hook
export let UseAllUsers =()=>{
    const {users,fetchUsers}= useContext(UserContextApi); 
    console.log(users);
    useEffect(()=>{
        fetchUsers();
    },[])
    return users

   
    
}



export default UserProvider;