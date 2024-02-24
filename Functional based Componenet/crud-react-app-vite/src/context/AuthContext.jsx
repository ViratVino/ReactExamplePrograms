import { useReducer,createContext, useEffect } from "react"
import authReducer from './../reducer/authReducer/AuthReducer';
import AuthInstance from './../AxioseInstance/AuthInstance';
import { User_API_Instance } from "../AxioseInstance/UserAxiosInstances";

export const  AuthContextApi = createContext();

const initialState ={
    payload:null,
    profile:null,
    isLoading:true
};

const AuthProvider=({children})=>{
   let [auth,dispatch]=useReducer(authReducer,initialState);
   const signup=async(payload)=>{
    let {data}=await AuthInstance.post('/users',payload);
    dispatch({type:'SIGNUP',payload:data})
   }

   const login=async(payload)=>{
    let {data}=await AuthInstance.post('/auth/login',payload);
    window.localStorage.setItem('TOKEN',JSON.stringify(data));
    dispatch({type:'LOGIN',payload:data})
   }

   let Logout=()=>{
        window.localStorage.removeItem("TOKEN");
          
        dispatch({type:"LOGOUT",payload:null});
        window.location.assign("/login")
   }


   let fetchAccessToken=()=>{
     
    let token=window.localStorage.getItem("TOKEN");
    let pardsedToken=JSON.parse(token);
  
      dispatch({type:"ACCESS_TOKEN",payload:pardsedToken})
   }


   let Token=window.localStorage.getItem("TOKEN");
   let parsedToken=JSON.parse(Token);
  let access_token=parsedToken?.access_token;

   let getMe= async(id)=>{
    
      try {
        let {data}=await User_API_Instance.get(`/auth/profile`,{
          headers:{
            Authorization:`Bearer ${access_token}`
          }
        }
        );

        console.log(data);
        dispatch({type:'GETME',profile:data})
      } catch (error) {
        console.log(error);
      }

    }
   

  useEffect(()=>{
   fetchAccessToken();
   getMe();
   
   
  },[])


let isAuth=auth?.payload?.access_token;
let current_user=auth?.profile

   
   


    return <AuthContextApi.Provider value={{auth,signup,login,isAuth,Logout,getMe}}>{children}</AuthContextApi.Provider>
}
 

export default AuthProvider;