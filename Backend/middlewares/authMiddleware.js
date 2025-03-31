const jwt = require('jsonwebtoken');
// const userLogin = require('./Models/userLoginModel');
// const userLogin = require("../Models/userLoginModel")
const {userLogin} = require("../Models/userLoginModel");

const requireSignIn = async (req,res,next) => {
    try {
        const token = req.header("Authorization");

        if(!token){
            return res.status(401).json({message:"token is not present"});
        };

        if (token.startsWith("Bearer ")){
            token = token.slice(7);
        };

        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        //console.log("1111111111",decode)
        
        next();
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = {requireSignIn};