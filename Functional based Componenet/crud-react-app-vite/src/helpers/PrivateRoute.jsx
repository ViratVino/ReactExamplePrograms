import { useContext } from 'react';
import { AuthContextApi } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


const PrivateRoute=({children})=>{
    let {isAuth}=useContext(AuthContextApi);
    
    if(isAuth===undefined||null){
        return <Navigate to="/login"/>
   }else{
    return<>{children}</>
   }

}

export default PrivateRoute;