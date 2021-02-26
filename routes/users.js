var express = require('express');
var router = express.Router();

const {register,processRegister,login,processLogin,logout,profile} = require('../controllers/usersController') 

router.get('/register',register);
router.post('/register',processRegister);

router.get('/login',login);
router.post('/login',processLogin);
router.get('/logout',logout);

router.get('/profile',profile);

module.exports = router;
