import React from 'react'

const Tasks = ({title,author,description}) => {
  return (
    <div className='container'>
        <h3>{title}</h3>
        <p>
            author :{author}
        </p>
        <p>
            {description}
        </p>
    </div>
  )
}

export default Tasks