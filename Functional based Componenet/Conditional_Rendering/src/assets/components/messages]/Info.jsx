import React from 'react'

const Info = ({text,status}) => {
    console.log(text);
  return (
    <div>
     {
        (function(){
            switch(status){
                case 'info':
                    return text;
                case 'warning':
                    return text;
                case 'error':
                    return text;
                default :
                  return 'no Found Here';
            }
        })()
     }
    </div>
  )
}

export default Info