import router from "express";
import User from "../model/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"
import dotenv from 'dotenv'

dotenv.config()

// import joi from 'joi'

const route = router();

route.post("/login", async (req, res) => {
  try {
    // const{error} = validate(req.body);

    const { email, password } = req.body;

    // if(error)
    //     return res.status(400).send({message:error.details[0].message})

    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password!!" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });


    return res.status(200).send({ email, token,userid: user._id, message: "Logged in Successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error In Login" });
  }
});

// const validate = (data) =>{
//     const schema = joi.object({
//         email:joi.string().email().required().label("Email"),
//         password:joi.string().required().label("Password")
//     })
//     return schema.validate(data);
// }

export default route;
