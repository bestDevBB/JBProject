/* User DB Operation 
index.js에서 User DB만 불러옴 */
const { Op } = require('sequelize');
const { User } = require('../models/index.js');

const dao = {
    
    // selectUser(params) {
    //     return new Promise((resolve, reject) => {
    //         User.findOne({
    //             attributes: ['user_id', 'password'],
    //             where: { user_id: params },
    //             raw: true // dataValues의 정보만 리턴
    //         })
    //         .then((selectedOne) => {
    //             resolve(selectedOne);
    //         })
    //         .catch((err) => {
    //             reject(err);
    //         });
    //     });
    // },

    // 로그인(for User lookup)
    async selectUser(params) {
      try {
        return await User.findOne({
          attributes: ['user_id', 'password'],
          where: { user_id: params },
          raw: true
        })
      } catch(err) {
        return err;
      };
    },

    // select
    async selectUserAll(params) {
      try {
        return await User.findAll({

        })
      } catch(err) {

      }
    },

    // insert
    async insertUser(params) {
      try {
        await User.create(params)
        return params;
      } catch(err) {
        return err;
      }
    }
};

module.exports = dao;