import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { deleteTask, toggleTask, updateTask } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

const DisplayTask = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.data);

  const dispatch = useDispatch();

  const handlTaskDone = () => {
   
    dispatch(toggleTask(task._id));
    console.log("taskhvghvf"+JSON.stringify(task));
  //  window.location.reload()
  };

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
    toast.success("Task deleted Successfully")
    window.location.reload()
  };

  const onFormSubmit = () => {
    setEditing((prevState) => !prevState);
    //console.log("taskidggggg" + task._id);
    dispatch(updateTask(task._id, text));
    toast.success("Task Edited Successfully")
  };

  return (
    <li
      className="task"
      onClick={()=>{
        handlTaskDone()
      }}
      style={{
        textDecoration: task.done ? "line-through " : "",
        fontWeight: task.done ? "bold" : "",
        color: task.done ? "#666" : "#34495e",
        lineHeight: "1.5",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{task.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>
      <span className="icon">
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => {
            setEditing((prevState) => !prevState);
          }}
        />
      </span>
      <span className="icon">
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </span>
    </li>
  );
};

export default DisplayTask;
