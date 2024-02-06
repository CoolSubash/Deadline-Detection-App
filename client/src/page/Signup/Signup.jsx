import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async () => {
    try {
    
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        {
          name,
          email,
          password,
          phonenumber,
        }
      );
    
      console.log("Server response:", response.data);
      alert("Succesfully Signup");

      navigate("/login");
    } catch (error) {
     console.log(error.AxiosError)
    }
  };

  return (
    <>
      <Navbar  />
      <div className="signup-container">
        <h2>Signup</h2>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <button type="button" onClick={handleSubmit}>
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
