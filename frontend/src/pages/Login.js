import React from "react";
import "../styles/Login.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import Again from "./Again";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/tasks/login",
        {
          email,
          password,
        }
      );
      // console.log(response.data.token);
      // Assuming your server returns a token and user data upon successful login
      const user  = response.data;

      // Save the token in localStorage or a secure storage method
      localStorage.setItem("auth", JSON.stringify(user));

      // Redirect to the profile page
      toast.success("Login Successfully")
      navigate('/');
    } catch (error) {
      console.error("Error logging in:", error.response.data);
      toast.success("Something Went Wrong!")
      // Handle login error, display a message to the user, etc.
    }
  };

  return (
    <>
    {/* <Again/> */}
    <div className="form-box">
      <div className="form-container">
        <p className="title">Welcome back</p>
        <form
          className="form"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
          <button type="submit" className="form-btn bg-success p-2 text-white bg-opacity-75">
            Log in
          </button>
        </form>
        <p className="sign-up-label">
          Don't have an account?
          <span className="sign-up-link text-dark">
            <a href="/register">Register</a>
          </span>
        </p>
        <div className="buttons-container"></div>
      </div>
    </div>
    </>
  );
};

export default Login;
