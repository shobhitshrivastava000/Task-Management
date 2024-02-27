import router from 'express'
import User from '../model/user.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const userRoutes = router()

// const validate = (data) =>{
//     const schema = Joi.object({
//         username:Joi.string().required().label('User Name'),
//         email:Joi.string().required().label('First Name'),
//         passsword:Joi.string().required().label('First Name'),
//     })
//     return schema.validate(data)
// }

userRoutes.post('/register', async(req,res) =>{
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
})

export default userRoutes