import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import routes from "./routes/routes.js";

import bodyParser from "body-parser";
// import { registerUser } from "./controller/AuthController.js";
// import { loginUser } from "./controller/AuthController.js";


//DB connection
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/tasks", routes);

//routes for auth




const PORT = 8080;
Connection();
app.listen(PORT, () => console.log("Server is running " + PORT));