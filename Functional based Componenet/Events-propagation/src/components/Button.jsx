import React from 'react'

const Button = ({children ,onTest}) => {
  return (
    <button  onClick={onTest}>{children}</button>
  )
}

export default Button