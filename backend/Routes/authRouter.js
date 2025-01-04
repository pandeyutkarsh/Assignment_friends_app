const express = require('express');
const {signup, login} = require('../Controllers/authController');
const { signupValidation, loginValidation } = require('../Middlewares/authValidation');
const router = express.Router();


router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup)

module.exports = router;
