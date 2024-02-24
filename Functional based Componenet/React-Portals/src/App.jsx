import { useState } from "react"
import Modal from "./Modal"
import Login from "./Login";

const App = () => {
  let[toggle,setToggle]=useState(false);
  let handleToggle=()=>{
    setToggle(!toggle);
  }


  return (
    
    <div className="main-content">
        <button onClick={handleToggle}>{toggle?'open':'close'}</button>
        {toggle? null: <Modal toggle={{toggle,handleToggle}}><Login toggle={{toggle,handleToggle}}/>   </Modal>}
    </div>
  )
}

export default App