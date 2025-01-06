export const UseLocalStorage = (value) => {
    const setItem = () => {
        try {
            window.localStorage.setItem("Data", JSON.stringify(value))
            
        } catch (error) {
            console.log(error)
        }
    }
    const getItem = () => {
        try {
            const item = window.localStorage.getItem("Data")
            if (item) {
                return JSON.parse(item)
            }
        } catch (error) {
            console.log(error);


        }
    }
    const removeItem=()=>{
        try {
            window.localStorage.removeItem("Data")
        } catch (error) {
            console.log(error)
        }
    }
    return { setItem, getItem, removeItem }
}

