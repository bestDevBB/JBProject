"use strict";

const express = require('express');
const logger = require('../config/logger');
const router = express.Router();

const loginRouter = require('./login.js');
const registerRouter = require('./register.js');

router.get('/', (req, res) => {
    logger.info('GET \'/\' \'홈 화면으로 이동\'')
    res.render('index.ejs', { title: 'Home' });
});

// router.use('/login', loginRouter.ctrl.login);
router.use('/login', loginRouter);
router.use('/register', registerRouter);

module.exports = router;