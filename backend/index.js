import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import routes from "./routes/routes.js";

import bodyParser from "body-parser";
import userRoutes from './routes/users.js'
import route from "./routes/auth.js";


//DB connection
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/tasks", routes);

//routes for auth
app.use("/api/auth", userRoutes);
app.use("/api/auth", route);

// app.post("/login", async (req, res) => {
//     try {
//       // const{error} = validate(req.body);
  
//       const { email, password } = req.body;
//       console.log(email,password);
  
//       // if(error)
//       //     return res.status(400).send({message:error.details[0].message})
  
//       const user = await User.findOne({ email });
//       console.log(user);
  
//       if (!user){
//         return res.status(401).send({ message: "Invalid Email or Password" });

//       }
  
//       const validPassword = await bcrypt.compare( password, user.password);
      
     
//       if (!validPassword) {
//         return res.status(401).send({ message: "Invalid Password!!" });
//       }
  
//       const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
//         expiresIn: "7d",
//       });
  
//       console.log("token " + token);
//       console.log("Private Key " + process.env.JWTPRIVATEKEY);
  
//       return res.status(200).send({ data: token, message: "Logged in Successfully" });
//     } catch (error) {
//       return res.status(500).send({ message: "Internal Server Error In Login" });
//     }
//   });

const PORT = 8080;
Connection();
app.listen(PORT, () => console.log("Server is running " + PORT));
