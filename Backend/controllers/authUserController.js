const { hashPassword, comparePassword } = require("../helpers/authUserHelper");
const userLogin = require("../Models/userLoginModel");
const jwt = require('jsonwebtoken');
require("dotenv").config();



const userRegister = async (req,res) => {
    try {
        const {name,email,password,phone,address} = req.body;
        if(!name){
            return res.send({message:'Name is required'});
        }
        if(!email){
            return res.send({message:'email is required'});
        }
        if(!password){
            return res.send({message:'password is required'});
        }
        if(!phone){
            return res.send({message:'phone is required'});
        }
        if(!address){
            return res.send({message:'address is required'});
        }
         
        const userExists = await userLogin.findOne({email});
        if (userExists){
            return res.status(200).json({
                success:false,
                message:"Already Registered Please Login"
            })
        }
        //register user we need function to hash password
        const hashedPassword = await hashPassword(password);
        //save to db
        const user = await new userLogin({name,email,phone,password:hashedPassword,address}).save()

        res.status(201).send({
            success:true,
            message:"user registered Succesfully",
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Registration",error
        })
        
    }
};

//login controller for user login
const userLoginController = async (req,res) => {
    try {
        const {email,password} = req.body;
        // validation of email and password
        if (!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invlaid email and password"
            })
        }
        // check user
        const user = await userLogin.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }
        const match = await comparePassword(password,user.password);
        if(!match){
        return res.status(200).send({
        success:false,
        message:"Invalid Password"
        })
        }
        const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        // console.log("+++++++++++++",token)
        return res.status(200).send({
            success:true,
            message:"Loggedin Succesfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,

            },
            token
        });
        
    } catch (error) {
        console.log("error5",error)
        
    }
}

// forgot password should be done through otp on email and registered mobile number or whatsapp

module.exports = {userRegister,userLoginController};