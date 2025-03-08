import React, {useEffect, useRef, useState} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'


const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? 
    JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
            if(inputText === "" ) {
                return null;
            }

        console.log(inputText);
        const newTodo = {
            id : Date.now(),
            text: inputText,
            isComplete: false,

        }
        setTodoList ((prev) => [...prev, newTodo]);
        inputRef.current.value = "";

    }
    const deleteTodo = (id)=> {
        setTodoList((prvTodos) => {
            return prvTodos.filter((todo) => todo.id !== id)
        })

    }
    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }
    useEffect(() => {localStorage.setItem("todos", JSON.stringify(todoList));

    }, [todoList])


  return (
    <div className='container' style={{backgroundColor: "white", 
        placeSelf: "center",       
        width: "91.6667%",         
        maxWidth: "28rem",         
        display: "flex",           
        flexDirection: "column",   
        padding: "1.75rem",       
        minHeight: "550px",        
        borderRadius: "0.75rem",
        

    }} >
        <div  style={{
    display: "flex",         
    alignItems: "center",    
    marginTop: "1.75rem",    
    gap: "0.5rem",        
  }} >
    <img style={{width: "2rem", }} src={todo_icon} />
    <h1 style={{
    fontSize: "1.875rem",  
    fontWeight: 600,      
  }}> To-Do List</h1>

        </div>
    <div style={{
    display: "flex",         
    alignItems: "center",    
    marginTop: "1.75rem",    
    marginBottom: "1.75rem", 
    backgroundColor: "#e5e7eb",
    borderRadius: "9999px", 
  }}>
        <input ref={inputRef} style={{
    backgroundColor: "transparent", 
    border: "none",                 
    outline: "none",                
    flex: 1,                       
    height: "3.5rem",              
    paddingLeft: "1.5rem",          
    paddingRight: "0.5rem",         
    color: "#475569",               
  }}
  placeholderStyle={{ color: "#475569" }}
   type='text' placeholder='Add your task'/>
        <button onClick={add} style={{
    border: "none",           
    borderRadius: "9999px",    
    backgroundColor: "#ea580c", 
    width: "8rem",             
    height: "3.5rem",          
    color: "white",            
    fontSize: "1.125rem",     
    fontWeight: 500,           
    cursor: "pointer",         
  }}> ADD +</button>
    </div>

    <div>
        {todoList.map((item, index) => {
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete}
            deleteTodo={deleteTodo} toggle={toggle} />

        })}
       
    </div>



        
    </div>
  )
}

export default Todo