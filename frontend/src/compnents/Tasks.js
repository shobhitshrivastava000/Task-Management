import React, { useEffect } from "react";
import { deleteTask, getAllTasks } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux"; //
//component
import DisplayTask from "./DisplayTask";
import Tabs from "./Tabs";
import { ALL_TASKS, ACTIVE_TASKS, DONE_TASKS } from "../redux/actions/type";

const Tasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state?.task[0]?.getTask);
  const currentTab = useSelector((state) => state.currentTab);
 
  const authDataString = localStorage.getItem('auth');

  const authData = JSON.parse(authDataString)
  
  const userid = authData.userid;
    
  // console.log("task"+JSON.stringify(tasks));

  useEffect(() => {
    
    dispatch(getAllTasks(userid));
    JSON.stringify(tasks);

    // eslint-disable-next-line 
  }, []);

  const getTask = () => {
    if (currentTab === ALL_TASKS) {
      return tasks;
    } else if (currentTab === ACTIVE_TASKS) {
      return tasks?.filter((task) => !task.done);
    } else if (currentTab === DONE_TASKS) {
      return tasks?.filter((task) => task.done);
    }
  };

  const removeDoneTask = () => {
    tasks.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTask(_id));
      }
    });
    window.location.reload()
  };

  return (
    <>
      <article>
        <div>
          <Tabs currentTab={currentTab} />

          {tasks?.length > 0 ?  (tasks?.some((task) => task.done) ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                removeDoneTask();
              }}
              className="button clear"
            >
              Remove Done Task
            </button>
          ) : null) : null}
        </div>
        <ul>

          {tasks?.length > 0 ? (getTask()?.length > 0
            ? getTask()?.map((task) => (
                <DisplayTask key={task._id} task={task} />
              ))
            : "Plan Something Nice"): null}
        </ul>
      </article>
    </>
  );
};

export default Tasks;
