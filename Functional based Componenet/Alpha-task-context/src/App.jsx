import React from 'react'
import NavbarContainer from './components/pages/navbar/NavbarContainer'
import TaskProvider from './components/context/TaskContext'
import TaskForm from './TaskForm'
import AllTask from './components/taskcomp/AllTask'

const App = () => {
  return (
    <TaskProvider>
        <header><NavbarContainer/></header>
        <main className='flex-container'>
            <TaskForm/>
            <AllTask/>
        </main>
    
    </TaskProvider>
  )
}

export default App