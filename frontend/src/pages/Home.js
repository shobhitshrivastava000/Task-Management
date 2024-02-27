import React from "react";
import Header from "../compnents/Header";
import TaskForm from "../compnents/TaskForm";
import Tasks from "../compnents/Tasks";
import '../App.css'
import Navbar from "../compnents/Navbar";
const Home = () => {
  return (
    <div className="home">
     
      <Header />
      <TaskForm />
      <Tasks />
    </div>
  );
};

export default Home;
