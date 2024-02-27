import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    try {

      const response = await axios.post(
        "http://localhost:8080/api/tasks/register",{
          username,email,password
        }
        
      );

      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("Response from server:", JSON.stringify(response));

      // Redirect to the desired page
      toast.success("Register Successfully")
      navigate("/login");
    } catch (error) {
      console.log("Error submitting form:", error);
      toast.success("Something went wrong")
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <p className="title">Welcome To Task Managemnet</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form className="form">
            <div>
              <Field
                className="input"
                placeholder="UserName"
                type="text"
                id="userName"
                name="userName"
                value={username}
                onChange={(e)=>{
                  setUsername(e.target.value)
                }}
                required={true}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="userName"
                component="div"
              />
            </div>

            <div>
              <Field
                placeholder="Email"
                className="input"
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                  
                }}
                required={true}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="email"
                component="div"
              />
            </div>

            <div>
              <Field
                placeholder="Password"
                className="input"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required={true}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="password"
                component="div"
              />
            </div>

            <div>
              <button type="submit" className="form-btn bg-success p-2 text-white bg-opacity-75">
                Register
              </button>
            </div>
          </Form>
        </Formik>
        <p className="sign-up-label">
          Already have an account?
          <span className="sign-up-link">
            {" "}
            <a href="/login">Login</a>{" "}
          </span>
        </p>
        <div className="buttons-container"></div>
      </div>
    </div>
  );
};

export default Register;
