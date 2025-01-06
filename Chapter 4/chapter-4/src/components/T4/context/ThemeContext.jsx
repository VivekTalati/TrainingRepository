import React, { createContext, useContext, useState } from 'react'
const AllThemesContext = createContext()

export const AllThemesProvider = ({ children }) => {

    // state to manage the Current Theme
    const [theme, setTheme] = useState("light")

    // Dynamic Themes For All Mode
    const allThemes={
        light:{
            color:'black',
            backgroundColor:'white',
            borderColor:'black'
        },
        dark:{
            color:'white',
            borderColor:'white',
            backgroundColor:'black'
        },
        blue:{
            color:'black',
            backgroundColor:'lightblue',
            borderColor:'black'
        },
        red:{
            color:'white',
            backgroundColor:'darkred',
            borderColor:'white'
        },
    }
    
    const toggleTheme =(selectedTheme)=>{
        setTheme(selectedTheme)
    }


    return (
        <AllThemesContext.Provider value={{theme:allThemes[theme],toggleTheme}}>
            {children}
        </AllThemesContext.Provider>

    )
}

export const useAllThemes = () => useContext(AllThemesContext)
