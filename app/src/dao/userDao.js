/* User DB Operation 
index.js에서 User DB만 불러옴 */
const { Op } = require('sequelize');
const { User } = require('../models/index.js');

const dao = {
    // 로그인(for User lookup)
    selectUser(params) {
        return new Promise((resolve, reject) => {
            User.findOne({
                attributes: ['user_id', 'password'],
                where: { user_id: params },
                raw: true // dataValues의 정보만 리턴
            })
            .then((selectedOne) => {
                resolve(selectedOne);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }

    // insertUser() {
    //     return new Promise((resolve, reject) => {
    //         User.
    //     })
    // }
};

module.exports = dao;