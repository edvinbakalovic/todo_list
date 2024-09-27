
import { useState } from 'react';
import './App.css';
import Task from './Task.js';
import TaskForm from './TaskForm.js';

function App() {
  const [tasks,setTasks] = useState([]);
  return (
   <main>
      <TaskForm/>
      <Task/>
   </main>
  );
}

export default App;
