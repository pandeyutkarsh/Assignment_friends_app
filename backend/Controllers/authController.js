
const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        message: `Internal server error ${err}`
    })
   }
}

const login = async (req,res)=>{
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        const errorMsg = "Auth failed Username or Password wrong!"
        if(!user){
            res.status(403).json({
                success: false,
                message: errorMsg
            })
        }

        const isPassEqual = await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            res.status(403).json({
                success: false,
                message: errorMsg
            })
        }

        const jwtToken = jwt.sign({email: user.email, _id: user.id},
            "secret-123",            //process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.status(200).json({
            success: true,
            message: "Login Successfull",
            jwtToken,
            email,
            name: user.name
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: `Internal server error ${err}`
        })
       }
}

module.exports = {
    signup,
    login
}