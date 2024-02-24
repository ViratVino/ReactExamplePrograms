import React, { useState } from 'react'
import Form from './components/forms/Form';
import TodoList from './components/todo/TodoList';
import toast,{Toaster} from "react-hot-toast";
import {v1 as uuid} from 'uuid';

const App = () => {
let [state,setState]=useState({
    items:[],
    id:uuid(),
    course:"",
    trainer:"",
    item:""
})

let handleChange=(e)=>{

    let{name,value}=e.target;
    setState({...state,[name]:value})
}

let handleSubmit=(e)=>{
    e.preventDefault();

    try{
      let newItem={
        id:state.id,
        course:state.course,
        trainer:state.trainer
      };
      let updateItem=[...state.items,newItem];
      console.log(updateItem);
      setState({
        items:updateItem,
        id:uuid(),
        course:"",
        trainer:""
        
      })


    }catch(error){
        console.log(error);
    }
}



let handleDelete=((id)=>{

    let filteredItem=state.items.filter(item=>item.id!==id);
    setState({items:filteredItem})

})


let handleUpdate=id=>{
    let editContent=state.items.filter(item=>item.id!==id);
    let selectedItem= state.items.find(item=>item.id===id);

    setState({
        items:editContent,
        course:selectedItem.course,
        trainer:selectedItem.trainer,
        id:id
    })

}

  return (
    <section id="mainBlock">
        <article>
            <Toaster></Toaster>
            <header><h1>Todo App</h1></header>
            <main>
                <Form   course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit}></Form>
                <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}></TodoList>
            </main>
        </article>
    </section>
  )
}

export default App