import { Fragment } from "react";
import { useLoaderData,useNavigation } from "react-router-dom"

const FetchGitUsers = () => {
    let {state}=useNavigation();
    let users=useLoaderData();
     if(state==="loading"){
        return<Spinner></Spinner>
     }
     return<>
     {
        users?.map(user=>{
            return <Fragment key={user.id}>
                 <img src={user.avatar_url} alt={user.login} height={100} width={100} />
            </Fragment>
        })
     }
     </>
}

export default FetchGitUsers