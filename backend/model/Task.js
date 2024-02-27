import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    data:{
        type: String,
        required: true
    },
    done:{
        type:Boolean,
        default:false
    },
    userid:{
        type:String,
        required:true,
        
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
},{timestamps: true})

const task = mongoose.model('task',TaskSchema);

export default task;