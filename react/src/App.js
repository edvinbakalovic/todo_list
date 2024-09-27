
import { useState } from 'react';
import './App.css';
import Task from './Task.js';
import TaskForm from './TaskForm.js';

function App() {
  const [tasks,setTasks] = useState([]);
  function addTask(){
    setTasks((prev)=>{
      return [...prev,{name:name,done:false}]
    });
  }
  return (
   <main>
      <TaskForm onAdd={addTask} />
      <Task/>
   </main>
  );
}

export default App;
