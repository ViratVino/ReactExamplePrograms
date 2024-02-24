import {createContext, useState} from 'react';
import { v1 as uuid} from 'uuid';

export const TaskContext=createContext();




const TaskProvider=({children})=>{
    let[task,settask]=useState("");
    const addTask=(title,author,description)=>{
        settask([...task,{title,author,description,id:uuid()}])

    }

    return<TaskContext.Provider value={{addTask,task}}>
        {children}
    </TaskContext.Provider>
}


export default TaskProvider;