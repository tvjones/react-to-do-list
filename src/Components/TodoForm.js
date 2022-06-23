import React from 'react'
import { useState } from 'react'
import List from './List';


const tasks = [];
function TodoForm() {


const [input, setInput] = useState('');


const handleChange =(e) =>{
    
    console.log(e.target.value)
    setInput(e.target.value);
}    
const handleSubmit = (e) =>{
    e.preventDefault();
    tasks.push(input);
    console.log(tasks)
    setInput('')
}


  return (
    <form className='todo-form'>
        <input  type='text' placeholder='add a task..' value = {input} onChange={handleChange} name = 'text' className='todo-input' ></input>
        <button type ="button" onClick={handleSubmit} className='todo-btn'>Add to list</button>
        <List></List>
    </form>)
}

export const list = tasks
export default TodoForm