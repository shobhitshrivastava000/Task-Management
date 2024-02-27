import Task from "../model/Task.js";
import User from "../model/user.js";

export const addTask = async (request, response) => {
  try {

    const userid = request.params.userid

    const newTask = new Task({
      data: request.body.data,
      userid,
    });
    await newTask.save();
    return response
      .status(200)
      .json({ message: "Task added successfully", newTask });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getAllTasks = async (request, response) => {
  try {
    // const data = localStorage.getItem('auth')
    
    // console.log("data"+data);
    // const user = await User.findOne({ email: data.email });
    
    const userid = request.params.userid

    const getTask = await Task.find({userid});

    return response.status(200).send({
      message: "Task is getAllTasks",
      getTask});
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const toggleTaskDone = async (request, response) => {
  try {
    const taskRef = await Task.findById({_id:request.params.id});

     await Task.findByIdAndUpdate(
      { _id: request.params.id },
      { done: !taskRef.done },
      { new: true }
    );
    // await task.save();
    return response.status(200).send({
      message: "Task is toggled",
      taskRef});
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateTask = async (request, response) => {
  try {
    await Task.findByIdAndUpdate(
       { _id: request.params.id },
      // {userid:request.params.userid},
      { data: request.body.data },
    );
    //  await updatedTask.save()
    const updatedTask = await Task.find({_id:request.params.id});
    return response.status(200).send({
      message: "Task is Updated",
      updatedTask});
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTask = async (request, response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete({
      _id: request.params.id,
    });

    return response
      .status(200)
      .json({ message: "Task is deleted", deletedTask });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
