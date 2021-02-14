const express = require('express');
const router = express.Router();

router.post('/add',addElement)
router.post('/edit',editElement)
router.get('/checkUpdate/:mainToken',updatesCheck)
router.post('/fetch',fetchElement)
router.get('/drop/:elementId',drop)
router.get('/download',download)

module.exports = router;