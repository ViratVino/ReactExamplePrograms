import { useContext, useEffect } from "react"
import { UserContextApi } from "../../context/UserContext"

const useFetchUser=()=>{

    let val = useContext(UserContextApi);
    
    console.log(val);
    useEffect(()=>{
        val.fetchUsers();
      
    },[])
    console.log(val);
   
    return val;
}

export default useFetchUser;