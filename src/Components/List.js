import React from 'react'
//import TodoForm from './TodoForm.js'
import {list} from './TodoForm.js'

//import tasks from './TodoForm.js'


function List() 
{
    const listItems = list.map((task) =>(
        <li className='List-item'>{task}</li>
    )
    
    )
  return (
    
    <div className='List'>
        {listItems}
    </div>
  )


}

export default List

