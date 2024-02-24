import React from 'react'
import Info from './Info';

const Notification = ({state}) => {
    // console.log(text,status);
  return (
    <div>
        {
            state.map((data,i)=>{
                return <Info key={i+1} {...data}></Info>
            })
        }
    </div>
  )
}

export default Notification;