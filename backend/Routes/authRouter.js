const express = require('express');
const {signup} = require('../Controllers/authController');
const { signupValidation } = require('../Middlewares/authValidation');
const router = express.Router();

router.post('/login',(req,res)=>{
    res.send('Login');
})


router.post('/signup',signupValidation,signup)

module.exports = router;
