
import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task.js';
import TaskForm from './TaskForm.js';

function App() {
  const [tasks,setTasks] = useState([]);
  useEffect(()=>{
    if(tasks.length===0) return;
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks])

  useEffect(()=>{
    const task = JSON.parse(localStorage.getItem('tasks'));
    setTasks(task);
  },[])

  function addTask(name){
    setTasks((prev)=>{
      return [...prev,{name:name,done:false}]
    });
  }

  function updateTaskDone(taskIndex,newDone){
    setTasks((prev)=>{
      const newTasks = [...prev];
      newTasks[taskIndex].done=newDone;
      return newTasks;
    });

  }

  const numberComplete = tasks.filter(task=>(task.done)).length;
  let message = '';

  if(numberComplete===0)
    message='Try to do it all!👇😉';
  else if(numberComplete+1===tasks.length)
    message="One more left!💪🔥";
  else if(numberComplete===tasks.length)
    message='All done!🥳✅';
  else
    message='Keep going!🤩🚀';
  
  return (
   <main>
    <h1>{numberComplete}/{tasks.length} Complete</h1>
    <h2>{message}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task,index)=>(
        <Task {...task} 
          onToggle={done => updateTaskDone(index,done)}/>
      ))}
   </main>
  );
}

export default App;
