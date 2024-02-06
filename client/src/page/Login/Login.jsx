import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios"; // Import Axios
import "./login.css";
import { useAuth } from "../../assets/contextApi/contextlogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        email,
        password,
      });

     
  
      if (response.status === 200) {
        const { userId } = response.data;
        // Store user ID in localStorage
      localStorage.setItem('userId', userId);
        alert('Login Successful');

        login();
        navigate('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle error scenarios
      if (error.response && error.response.status === 401) {
        alert('Login failed. Please check your credentials.');
      } else {
        console.error('Error during login:', error);
      }
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>

        <p>
          Not registered? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
