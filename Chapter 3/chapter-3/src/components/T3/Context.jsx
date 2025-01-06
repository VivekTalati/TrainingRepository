import React, { createContext, useState } from 'react'

export const languageContext = createContext()

const Context = ({ children }) => {
    // provider and consumer
    const [language, setLanguage] = useState('en')

    const changeLanguage=(language)=>{
       setLanguage(language)
    }
    return (
        <>
            <languageContext.Provider value={{ language ,changeLanguage}}>
                {children}
            </languageContext.Provider>
        </>
    )
}

export default Context