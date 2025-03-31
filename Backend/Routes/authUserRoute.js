const express = require('express');
const { userRegister, userLoginController } = require('../controllers/authUserController');
const { requireSignIn } = require('../middlewares/authMiddleware');

const Router = express.Router();

//Register Route for user
Router.post("/register",userRegister);

Router.post('/login',userLoginController);

Router.post('/signin',requireSignIn,(req,res) => {
    res.status(200).json({ok:true,user:req.user})
})

module.exports = Router;