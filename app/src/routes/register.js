"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');

router.get('/', (req, res) => {
    logger.info("GET \'/register\' \'회원가입 화면으로 이동\'");
    res.render('register.ejs');
});

router.post('/', async (req, res) => {
    
})

module.exports = router;