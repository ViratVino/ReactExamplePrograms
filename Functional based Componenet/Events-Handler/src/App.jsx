import React from 'react'
import AudioComp from './components/AudioComp';
import Link1 from "./components/vid1.mp4.mp4";
import Link2 from "./components/vid2.mp4.mp4";


const App = () => {



  
    const audioArr=[{link:Link1,
      imgUrl:"https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxRRDdrQTBNMktPRXx8ZW58MHx8fHx8"
    
    },{link:Link2,
      imgUrl:"https://plus.unsplash.com/premium_photo-1661765914137-a17b5ffe41b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8UUQ3a0EwTTJLT0V8fGVufDB8fHx8fA%3D%3D"
  }]

  return (
    <div>
        <AudioComp audio={audioArr} />
    </div>
  )
}

export default App