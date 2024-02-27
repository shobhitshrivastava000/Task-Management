import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
 
 const Connection = ()=>{
    mongoose.connect(process.env.MONGODB_URL)

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected");
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("Database disconnected");
    })
    mongoose.connection.on('err',()=>{
        console.log("Error while Conencting",err.message);
    })

}

export default Connection;