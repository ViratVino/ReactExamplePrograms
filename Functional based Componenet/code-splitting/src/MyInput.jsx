import React from 'react'

const MyInput = (props,ref) => {
  return (
    <div>
        {props.label}
        <input {...props} ref={ref} />
    </div>
  )
}

export default React.forwardRef(MyInput);