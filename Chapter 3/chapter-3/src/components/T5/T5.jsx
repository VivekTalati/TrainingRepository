import React, { useEffect, useRef } from 'react'

const T5 = () => {
  document.title='Auto-focus input box.'
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <>
    <h1>Taskks</h1>
    <hr />
    <br />
    <input type="text" ref={inputRef}/>

      
    </>
  )
}

export default T5
