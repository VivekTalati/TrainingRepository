const API_LINK ='https://randomuser.me/api/'

// import React from 'react'

export const FetchUsers = async (count = 10) => {
    try {
        const response = await fetch(`${API_LINK}?results=${count}`)
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);            
        }

        const data = await response.json() // Parse the JSON from the response.
        return data.results;

    } catch (error) {
        throw new Error(error.message)
    }
}

// export default UserService
