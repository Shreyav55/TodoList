import React from 'react'

// import menuIcon from '../assets/menu.png';
// import logo_light from '../assets/sun.png';
// import logo_dark from '../assets/moon.png';



const Navbar = () => {

   
  return (
     <nav style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "space-between",
         padding: "0px 5px",
         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
         background: "white",
         height: "60px"

       }}>
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
         
       <h2 style={{ margin: 0, fontSize: "30px", fontWeight: "bold", color: "#ea580c", marginLeft: "40px" }}>ToDo List</h2>
       </div>
     </nav>
   
  )
}

export default Navbar