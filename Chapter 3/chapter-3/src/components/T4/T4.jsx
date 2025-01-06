import React, { useReducer } from 'react'
import './T4.css'

const T4 = () => {
    document.title='Counter'
    const reducer = (state, action) => {
        console.log(state, action)
        if (action.type === "Increment") {
            return state + 1;
        }
        if (action.type === "Decrement") {
            return state - 1;
        }
        if (action.type === "Reset") {
            return state = 0;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <div className='counter'>
                <h1>{count}</h1>
                <div className='btn'>
                    <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
                    <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
                    <button onClick={()=> dispatch({type:"Reset"})}>Reset</button>
                </div>

            </div>

        </>
    )
}

export default T4
