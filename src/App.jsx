
 import React from 'react'
import Todo from './components/Todo'
import Navbar from './components/Navbar'
import './index.css'


const App = () => {
  return (
    
    <div 
    style={{ backgroundColor: "rgb(28, 25, 23)",
       paddingTop: "1rem",
       paddingBottom: "1rem",
        display: "grid",
        height: "100vh" }}>
          <Navbar />
      <Todo/>
    </div>
  )
}

export default App