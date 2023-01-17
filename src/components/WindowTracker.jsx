import React from 'react'
import "../styles/WindowTracker.css"

const WindowTracker = () => {
   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
   React.useEffect(() => {
       function watchWidth() {
        //    console.log("Changing up...")
           setWindowWidth(window.innerWidth)
       }
       
       window.addEventListener("resize", watchWidth)
       
       return function() {
        //    console.log("Cleaning up...")
           window.removeEventListener("resize", watchWidth)
       }
   }, [])
   
   return (
       <h1>Window width: {windowWidth}</h1>
   )
}

export default WindowTracker