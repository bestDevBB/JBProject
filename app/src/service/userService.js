/* 프론트에서 입력한 값과 일치하는지 판단 */
"use strict";

const dao = require('../dao/userDao.js');

class User {
    constructor(body) { // body에서 입력한 값을 담아줌
        this.body = body;
    };

    async login() {
        const client = this.body;

        try {
            const user = await dao.selectUser(client.user_id); // userDao.js
            // 클라이언트에서 입력한 아이디의 정보를 user에 가져옴
            console.log(user);

            if(user) {
                if(user.user_id === client.user_id && user.password === client.password) {
                    return { success: true };
                };
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch(err) {
            return { success: false, err } // err: err
        };
    };

    async register() {
        const client = this.body;
    };
};

module.exports = User;