import router from 'express'
import User from '../model/user.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
export const registerUser = async (req, res) => {
    try {
        // const {error} = validate(req.body);

        const {username, email, password} = req.body
        
        const user = await User.findOne({email});
        if (user)
            return res.status(409).send({message:"User with email already exist"})
        const salt= await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(password,salt)

        await new User({username, email, password:hashPassword}).save()

        return res.status(201).send({message:"User created successfully",user:{
            username,email
        } })

    } catch (error) {
        return res.status(500).send({message:"Internal Server Errror While Register"})
    }
  };








  export const loginUser = async (req, res) => {
    try {
      // const{error} = validate(req.body);
  
      const { email, password } = req.body;
  
      
  
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

      console.log(token);
     

      return res.status(200).send({ email, token,userid: user._id, message: "Logged in Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error In Login" });
    }
  };
  
