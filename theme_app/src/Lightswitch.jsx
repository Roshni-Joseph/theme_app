import React from 'react';
import {DarkModeContext} from './context/DarkModeContext';


const Lightswitch = () => {
    const {darkMode,toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () =>{
        toggleDarkMode();
        console.log("clicked")
    }

  return (
    <div className='Lightswitch'>
        <h1 style={{ color: darkMode ? 'rgb(255, 255, 255)' : '#000' }} onClick={handleClick}>Click Me</h1>
    </div>
  )
}

export default Lightswitch;