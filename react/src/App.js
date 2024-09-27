
import { useState } from 'react';
import './App.css';
import Task from './Task.js';
import TaskForm from './TaskForm.js';

function App() {
  const [tasks,setTasks] = useState([]);
  function addTask(){
    setTasks((prev)=>{
      return [...prev,{name:namee,done:false}]
    });
  }
  return (
   <main>
      <TaskForm onAdd={addTask} />
      {tasks.map(task=>(
        <Task/>
      ))}
   </main>
  );
}

export default App;
