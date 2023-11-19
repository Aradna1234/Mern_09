import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, settodos] = useState([]);
   const[task, settask] = useState("");
   const[status, setstatus] =useState("completed");

   return(
    <div className='App'>
      <form onSubmit= {(Event)=> {
     Event.preventDefault();
     const currentDate = new Date();
     settodos([...todos,{
      task: task,
      status: status,
      date: currentDate.toLocaleString()
     }
    ]);
      }

      }>
       <label>task</label>
       <input  required type="text" value={task}onChange={(Event)=>{
        settask(Event.target.value)
       }
      } />
      <select required value={status} onChange={(e) => {
        setstatus(e.target.value);
      }}>
        
      <option value="completed">completed</option>
      <option value="Incompleted">Incompleted</option>
      <option value="pending">pending</option>
      </select>
      <button type='submit'>Submit</button>
      </form>

      <div>
{
   todos.map((todosItem) =>{
    return(
    <div key={todosItem}style={{display: "flex", gap:"50px"}}>
      <span>{todosItem.task}</span>
      <span>{todosItem.status}</span>
      <span>{todosItem.date}</span>
    </div>)
   })
}
      </div>
    </div>
    
   )
}
export default App;


