const express = require('express');
const router = express.Router();
const login = require('./../handlers/login');
const signup = require('./../handlers/signup');
const register = require('./../handlers/register');
const logout = require('./../handlers/logout');

router.post('/login',login);
router.post('/signup',signup);
router.get('/register/:emailId/:eventName',register);
router.get('/logout/:emailId',logout);

module.exports = router;
