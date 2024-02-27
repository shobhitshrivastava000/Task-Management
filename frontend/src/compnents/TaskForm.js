import React from "react";
import { useState } from "react";
import { addNewTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
 
const authDataString = localStorage.getItem('auth');

const authData = JSON.parse(authDataString)

const userid = authData.userid;


  const onFormSubmit = () => {

    dispatch(addNewTask(userid,text));
    setText('');
    // window.location.reload();
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <form className="form" onSubmit={ onFormSubmit }>
        <input placeholder="Enter New Task" onChange={onInputChange} value={text}/>
      </form>
    </>
  );
};

export default TaskForm;
