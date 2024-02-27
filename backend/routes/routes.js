import express from 'express'
import { addTask,getAllTasks,toggleTaskDone,updateTask,deleteTask} from '../controller/TaskController.js';
const routes = express.Router();


routes.post('/add/:userid',addTask)
routes.get('/gettasks/:userid',getAllTasks)
routes.put('/:id',toggleTaskDone)
routes.put('/updatetask/:id',updateTask)
routes.delete('/delete/:id',deleteTask)

export default routes