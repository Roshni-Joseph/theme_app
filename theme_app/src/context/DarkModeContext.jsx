import React, {createContext,useState} from 'react';

const DarkModeContext  = createContext();

DarkModeProvider = (props) =>{
    const [darkMode,setDarkMode] = useState(false);
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode);
    };
    return(
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    )
}

export default {DarkModeContext,DarkModeProvider};