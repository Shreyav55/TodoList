import React from 'react'
import delete_icon from '../assets/delete.png'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'



const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div style={{
        display: "flex", alignItems: "center", marginTop: "0.75rem",marginBottom: "0.75rem", 
        gap: "0.5rem",          
      }}>
        <div onClick={() => {toggle(id)}} style={{
    display: "flex", flex: 1,alignItems: "center",   
    cursor: "pointer",      
  }}>
        <img src={isComplete ? tick : not_tick}  style={{width: "1.75rem",}}/>
        <p style={{
    color: "#334155",marginLeft: "1rem",  
    fontSize: "17px",
    textDecoration: isComplete ? "line-through" : "none", 
    textDecorationColor: "#64748b",   
  }}> {text} </p>
        </div>
        <img onClick={() => {deleteTodo(id)}} src={delete_icon}  style={{
    width: "1.275rem", 
    cursor: "pointer", 
  }}/>
    </div>
  )
}

export default TodoItems