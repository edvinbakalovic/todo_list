import {useState} from "react";

export default function TaskForm({onAdd}){
    const [taskName,setTaskName] = useState(' ');
    return(
    <form onSubmit={ev=>onAdd(taskName)}>
      <button>+</button>
      <input type="text" 
      value={taskName}
      onChange={(ev)=>{
        setTaskName(ev.target.value);
        console.log(taskName);
      }}  
       placeholder="New task ..."/>
    </form>
    )
}