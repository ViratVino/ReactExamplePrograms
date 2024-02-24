import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

import Tasks from './Tasks';

const AllTask = () => {
    let {task}=useContext(TaskContext);
  return (

   
    <section id='task'>
        <article>
            <h2>All Tasks</h2>
            <div className="list">
                {
                    task===""?'loading...':task.length>0 && task.map(t=>{
                        return <Tasks key={t.id} {...t}/>
                    })
                }
            </div>
        </article>
    </section>
  )
}

export default AllTask