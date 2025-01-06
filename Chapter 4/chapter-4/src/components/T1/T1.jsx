import React from 'react'
import { AuthProvider, useAuth } from "./context/AuthContext";
import './T1.css'


const LoggedIn = () => {
  document.title='Home Page | Login Successfull'
  
  const { logout } = useAuth();
  return (
    <div>
        <h1>Welcome back, User! 🎉</h1>
        <p>You now have access to premium content and features.</p>
        <button onClick={logout} className='btn'>Logout</button>
      </div>
    );
  };
  
  // Component to display when the user is logged out
  const LoggedOut = () => {
    document.title='Authentication Page '

    const { login } = useAuth();
    return (
      <div>
        <h1>Hello, Visitor! 👋</h1>
        <p>Log in to access your personalized dashboard and features.</p>
        <button onClick={login} className='btn'>Login</button>
      </div>
    );
  };
  
  // Main component to determine what to display
  const MainComponentt = () => {
    const { isAuthenticated } = useAuth();
  
    return (
      <div>
        {/* Show different content based on the auth state */}
        {isAuthenticated ? <LoggedIn /> : <LoggedOut />}
      </div>
    );
  };
  

const T1 = () => {
  return (
    <AuthProvider>
      <div style={{ textAlign: "center", marginTop: "50px",fontSize:"25px" }}>
        <MainComponentt />
      </div>
    </AuthProvider>
  )
}

export default T1
