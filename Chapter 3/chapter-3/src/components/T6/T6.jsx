import React, { useCallback, useMemo, useState } from 'react'
import './T6.css'

const T6 = () => {
    document.title='Sum of Squares Calculator'
    const [numbers, setNumbers] = useState([])
    const [inputValue, SetInputValue] = useState("")


    const sumOfNumbers = useMemo(() => {
        console.log("Calculating Sum Of Squares...")
        return numbers.reduce((sum, num) => sum + num * num, 0)
    }, [numbers])


    const handleInputChange = useCallback((event) => {
        SetInputValue(event.target.value)
    }, [])


    const handleAddNumbers = useCallback(() => {
        const num = parseFloat(inputValue);
        if (!isNaN(num)) {
            setNumbers((prevNumbers) => [...prevNumbers, num])
        }
        SetInputValue("")
    }, [inputValue])

    return (
        <>
            <div className='container'>
                <div className='inputandbutton'>
                    <h1>Sum of Squares Calculator</h1>
                    <input type="number" alt='Enter a Number' value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleAddNumbers}>Add Number</button>
                </div>
                <div className='container2'>
                    <div className='show'>
                        <h2>Numbers List</h2>
                        <ul>
                            {numbers.map((num, index) =>
                            (
                                <li key={index} > {num}</li>
                            )
                            )}
                        </ul>
                    </div>
                    <div className='show'>
                        <h2>Sum Of Squares:</h2>
                        <p>=    {sumOfNumbers}</p>
                    </div>
                </div>
            </div >

        </>
    )
}

export default T6
