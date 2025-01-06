import React, { useState ,useRef,useEffect} from 'react'
import { UseLocalStorage } from './UseLocalStorage'
import './T7.css'

const T7 = () => {
    document.title='Using Local Storage'

    const inputRef = useRef(null);
        useEffect(()=>{
            inputRef.current.focus()
        },[])

    const [value, setValue] = useState('')
    const { getItem , setItem, removeItem } = UseLocalStorage(value)
    return (
        <>
            <div className='container'>
                <h1>Use Local Storage</h1>
                <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
                <div className='buttons'>
                    <button onClick={()=>{setItem(value)}}>Set</button>
                    <button onClick={()=>console.log(getItem())}>Get</button>
                    <button onClick={()=>{console.log(removeItem()),setValue("")}}>Remove</button>
                </div>
                <div>
                    <h1>The Value: ["{value}"]</h1>              
                    </div>

            </div>

        </>
    )
}

export default T7
