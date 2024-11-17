import React, { useState } from 'react'

const TodoInput = (props) => {
    const [inputText,setInputText]=useState('');
  return (
    <div className="input-container">
        <input type="text " className='input-box-todo' placeholder="Add something" onChange={e=>{setInputText(e.target.value)}} value={inputText}/>
        <button className='add-btn' onClick={()=>{
            props.addlist(inputText)
            setInputText(" ");
        }}>+</button>
        
    </div>
  )
}

export default TodoInput;