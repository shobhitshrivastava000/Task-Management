import axios from "axios";
import { ADDNEW_TASK,GETALL_TASK,TOGGLE_TASK,UPDATE_TASK,DELETE_TASK,TOGGLE_TAB } from "./type";
import axiosInstance from "../../compnents/AxiosInstance";


export const addNewTask = (userid,data) => async (dispatch) => {
  try {
    //  const res = axios.post(`${process.env.REACT_APP_API}/api/tasks/add`,{data})
    const res =await axios.post(`http://localhost:8080/api/tasks/add/${userid}`, { data });

    console.log("userid"+userid);
    dispatch({ type: ADDNEW_TASK, payload: res.data });
  } catch (error) {
    console.log("Error while calling add new task", error.message);
  }
};

export const getAllTasks = (userid) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/tasks/gettasks/${userid}`);

    dispatch({ type: GETALL_TASK, payload: res.data });
   //  return res.data;
  } catch (error) {
    console.log("Error while calling getAllTasks", error.message);
  }
};

export const toggleTask = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8080/api/tasks/${id}`);

    dispatch({ type: TOGGLE_TASK, payload: res.data });
   //  return res.data;
  } catch (error) {
    console.log("Error while calling getAllTasks", error.message);
  }
};

export const updateTask = (id,data) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8080/api/tasks/updatetask/${id}`,{data});

    dispatch({ type: UPDATE_TASK, payload: res.data });
   //  return res.data;
  } catch (error) {
    console.log("Error while calling getAllTasks", error.message);
  }
}; 

export const deleteTask = (id) => async (dispatch) =>  {
  try {
    const res = await axios.delete(`http://localhost:8080/api/tasks/delete/${id}`);

    dispatch({ type: DELETE_TASK, payload: res.data });
   //  return res.data;
  } catch (error) {
    console.log("Error while calling getAllTasks", error.message);
  }
}; 


export const toggleTab = (tab) => async (dispatch) =>{
   dispatch({type:TOGGLE_TAB,selected:tab})
}