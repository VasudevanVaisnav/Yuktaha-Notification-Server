const express = require('express');
const router = express.Router();
const addElement = require('./../handlers/addElement');
const download = require('./../handlers/download');
const drop = require('./../handlers/drop');
const fetchElement = require('./../handlers/fetchElement');
const updatesCheck = require('./../handlers/updatesCheck');
const editElement = require('./../handlers/editElement');

router.post('/add',addElement)
router.post('/edit',editElement)
router.get('/checkUpdate/:mainToken',updatesCheck)
router.post('/fetch',fetchElement)
router.get('/fetchElement/:elementId',drop)
router.get('/download',download)

module.exports = router;