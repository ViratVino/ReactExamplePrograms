import React, { useContext, useRef, useState } from 'react';
import { ThemeContextApi } from '../context/ThemeContext';




const Container = () => {

    const[toggle,setToggle]=useState(false);
    const {light,dark}=useContext(ThemeContextApi);
    let elemRef=useRef();

    let handleTheme=()=>{
        setToggle(!toggle);
        if(toggle===true){
            elemRef.current.style.color=dark.color;
            elemRef.current.style.background=dark.background;

        }else{
            elemRef.current.style.color=light.color;
            elemRef.current.style.background=light.background;
        }
    }
   
  return (
    <div  ref={elemRef}>
        <h1>
            I am Container Block
        </h1>
        <button style={{float:"right"}} onClick={handleTheme}>{toggle?"Dark":"Light"}</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam sequi id adipisci, saepe sit numquam ratione quos voluptatibus vero, maiores, cum rerum exercitationem veritatis dicta? Accusantium minus possimus maxime.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, et amet! Facere consectetur enim eligendi cum odit incidunt optio deleniti animi cupiditate vitae facilis iure, quisquam ducimus. Odit, molestiae! Eveniet.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eveniet et id asperiores ex! Cumque, officiis. Earum, maiores officiis harum nihil dignissimos cupiditate sunt reprehenderit, repudiandae temporibus quaerat itaque deleniti?
        </p>
    </div>
  )
}

export default Container