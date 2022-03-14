const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/loginSignup.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/loginSignup.js'))
});

router.get('/control.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/control.js'))
});

router.get('/navFoot.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/navFoot.js'))
});


module.exports = router;