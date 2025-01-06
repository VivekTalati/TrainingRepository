import React, { useContext } from 'react'
import Context, { languageContext } from './Context'
import './T3.css'


const T3 = () => {
    document.title='Multi-Language Website'

    const { language,changeLanguage } = useContext(languageContext);

    const texts = {
        en: "Hello, Welcome To My MERN Stack Internship Journey...!😊\n These is my React Js Task.",
        hi: "नमस्ते, मेरी MERN स्टैक इंटर्नशिप यात्रा में आपका स्वागत है...!😊 \n यह मेरा रिएक्ट जेएस टास्क है। ",
        sp: "Hola, ¡bienvenido a mi viaje de pasantías MERN Stack...!😊 \n Esta es mi tarea React Js. "
    }

    return (
        <>
            <Context>
                <div className='container'>
                    <div>
                        <button onClick={() => { changeLanguage('en') }}>English</button>
                        <button onClick={() => { changeLanguage('hi') }}>Hindi</button>
                        <button onClick={() => { changeLanguage('sp') }}>Spanish</button>
                    </div>
                    <div>
                        <h1>{texts[language]}</h1>
                        {/* <h1>{name}</h1> */}
                    </div>
                </div>
            </Context>
        </>
    )
}

export default T3