import React from 'react'
import "./navbar.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../assets/contextApi/contextlogin';// Assuming you're using React Router
const Navbar = () => {
  const { isAuthenticated, login,logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('userId');
    logout()
    navigate('/login');
  }

  return (
    <>
      <nav className="navbar">
      <div className="left-section detection-app">Deadline Detection App</div>
      <div className="right-section">
       
        {isAuthenticated ? (
            <>
             <Link to="/" className='active'>Home</Link>
              <Link to="/add-task">Add Task</Link>
             
              <button onClick={handleLogout} className='logout'>Logout</button>
             
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
      </div>
    </nav>
    </>
  )
}

export default Navbar