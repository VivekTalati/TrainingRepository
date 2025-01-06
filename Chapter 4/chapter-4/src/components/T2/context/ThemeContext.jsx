import React, { createContext, useContext, useState } from "react";
// import { useContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    // state to manage the Current Theme
    const [isDarkMode, setIsDarkMode] = useState(false)


    // Dynamic Themes For Light And Dark Mode
    const lightTheme = {
        color: 'black',
        backgroundColor: 'white'
    };
    const darkTheme = {
        color: "white",
        backgroundColor: 'black'
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }
    
    return (
        <ThemeContext.Provider value={{ isDarkMode, lightTheme, darkTheme ,toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )


}

export const useTheme = () => useContext(ThemeContext)
