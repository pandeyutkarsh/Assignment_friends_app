
const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');
const signup = async (req,res)=>{
   try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});

        if(user){
            res.status(409).json({
                success: false,
                message: "User Already exists!!"
            })
        }

        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201).json({
            success: true,
            message: "User created successfully"
        })
   }catch(err){
    res.status(500).json({
        success: false,
        message: "Internal server error"
    })
   }
}

module.exports = {
    signup
}