import React from 'react'

const Player = (probs) => {


    console.log(probs);
    // console.log(probs.data);
    let {link,imgUrl}=probs.data;

  
    console.log(probs.handle);

    // let handle=()=>{
    //     const audio=new Audio(link);
    //     audio.play();
    // }
   console.log(link);
  return (
    <div>
        {/* <video src={probs.link} controls/> */}

        {/* <span>
            <button onClick={handle}>
                  play
            </button>
        </span> */}

        
        <figure>
            <picture>
                <img src={imgUrl} alt="Photo" onClick={()=>probs.handle(link)}/>
            </picture>
        </figure>
    </div>
  )
}

export default Player