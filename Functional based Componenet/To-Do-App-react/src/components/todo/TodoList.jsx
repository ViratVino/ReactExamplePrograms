import React, { Fragment } from 'react'

const TodoList = ({items,handleDelete,handleUpdate}) => {
    console.log(items);
  return (
    <div className='todo'>
        <h2>Courses</h2>
        <table>
            <thead>
                <th>id</th>
                <th>course</th>
                <th>trainer</th>
                <th></th>
            </thead>
            <tbody>
                {
                    items.length>0 && 
                    items.map((val)=>{
                        console.log(val);
                        return(
                            <Fragment key={val.id}>
                            <tr key={val.id}>
                                <td>{val.id.slice(0,4)}</td>
                                <td>{val.course}</td>
                                <td>{val.trainer}</td>
                                <td>
                                    <button className='update' onClick={()=>handleUpdate(val.id)}>Update</button>
                                    <button className='delete' onClick={()=>handleDelete(val.id)}>Delete</button>
                                </td>
                            </tr>
                            </Fragment>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default TodoList