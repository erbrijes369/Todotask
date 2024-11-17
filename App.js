import React, { useState } from 'react'
import "./App.css"
import TodoInput from './Conponant/TodoInput'
import Todolist from './Conponant/TodoList'

const App = () => {
  const[listTodo,setlistTodo]=useState([]);
  let addlist=(inputText)=>{

    if(inputText !==''){
      setlistTodo([...listTodo,inputText])
    }
    
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setlistTodo([...newListTodo])
  }

  return (
    <div className='main-container'>App
    
    <div className="center-container">
      <TodoInput addlist={addlist} />
      <h1 className='app-heading'>What you want ?</h1>
      <hr />
      {listTodo.map((listItem,i)=>{
        return(
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}

    </div>
    </div>
  )
}

export default App