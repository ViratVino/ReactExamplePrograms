import React, { useRef } from "react";
import MyInput from "./MyInput";

const Form = () => {
  let ref = useRef();
  let handleClick = () => {
    ref.current.focus();
    ref.current.style.background = "yellow";
  };
  return (
    <div>
      <MyInput ref={ref} label="Enter Name" placeholder="Enter name" type="text" />
      <button onClick={handleClick}>change</button>
    </div>
  );
};

export default Form;
