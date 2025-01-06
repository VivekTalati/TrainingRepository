import React, { useEffect, useState } from 'react';
import { FetchUsers } from './services/userService';
// import {FetchUsers} from './services/UserService';
import './T2.css'

const T2 = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const getUsers = async () => {

            try {
                setLoading(true); //starts Loading
                const userData = await FetchUsers(5);
                console.log(userData);
                setUsers(userData); // Store the fetched users in state
                setError(null); // Reset any previous errors

            } catch (error) {
                setError(error.message);

            } finally {
                setLoading(false);// Set loading to false after fetching.
            }
        }
        getUsers(); // Empty dependency array means this effect runs once after the component mounts
    }, [])
    if (loading) {
        return <div className='loading'>Loading...</div>
    }
    if (error) {
        return <div className='error'>Error...{error}</div>
    }
    if (users.length === 0) {
        return <div className='no-users'>No Users Found</div>
    }
    return (
        <div className='random-users'>
            <h2>Random Users</h2>
            <div className='user-list'>
                {users.map((user, index) => (
                    <div key={index} className='user-card'>
                        <img src={user.picture.large} alt="User" className='user-image' />
                        <p><strong>Name:</strong>{`${user.name.title} ${user.name.first} ${user.name.last}`} </p>
                        <p><strong>Email:</strong>{user.email}</p>
                        <p><strong>Location:</strong>{`${user.location.city}, ${user.location.country}`}</p>
                        <p><strong>Age:</strong>{`${user.registered.age}`}</p>
                    </div>))
                }
            </div>

        </div>
    )
}

export default T2
