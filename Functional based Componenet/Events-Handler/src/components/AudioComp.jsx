import React, { Fragment } from 'react'
import Player from './Player';

const AudioComp = ({audio}) => {
console.log(audio);



 let handle=(val)=>{
        const audio=new Audio(val);
        audio.play();
    }

  return (

   
    <article className='container'>
        {
            audio.map((audio,index)=>{

                return(
                <Fragment key={index+1}>
                    <Player  data={audio}  handle={handle}></Player>
                </Fragment>
                )
            })
        }
    </article>
  )
}

export default AudioComp