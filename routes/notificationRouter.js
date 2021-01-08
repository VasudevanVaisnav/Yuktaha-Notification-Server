const express = require('express');
const router = express.Router();
const notify = require('./../handlers/notify');

router.post('/notify',notify);