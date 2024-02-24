import React, { Fragment } from 'react'
import User from './User'

const Users = ({state}) => {

if(!state){
    return <h1>Loading...</h1>
}
if(!state.length){
    return(<h1>Sorry No Users Found</h1>)
}else{
    return(
        <Fragment>
            {
                state.map((data,i)=>{
                    return(
                        <Fragment key={i}>
                           <User key={i} {...data}></User>
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

 
}

export default Users