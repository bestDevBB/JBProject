"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const { sequelize } = require('./src/models/index.js');

const app = express();
dotenv.config();

const router = require('./src/routes/index.js');
const logger = require('./src/config/logger.js');

// DB Connection
sequelize.sync({ force: false })
// DB가 초기화 될 때 DB에 필요한 테이블을 생성하는 함수
    .then(() => {
        logger.info("데이터베이스 연결 성공!");
    })
    .catch((err) => {
        logger.info("연결 실패!");
        // logger.error(err);
        console.error("ERROR :", err);
    });


// app setting
app.set("views", "./src/views");
app.set("views engine", "ejs");

// middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
// app.use('/', router);

module.exports = app;