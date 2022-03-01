/* User Table Model */
"use strict";

const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userId: {
                type: Sequelize.STRING(20)
            },
            userPw: {
                type: Sequelize.STRING(15),
                allowNull: false
            },
            userName: {
                type: Sequelize.STRING(20)
            },
            userEmail: {
                type: Sequelize.STRING(30)
            },
            userPhoneNumber: {
                type: Sequelize.STRING(15)
            },
            userBirth: {
                type: Sequelize.STRING(10)
            },
            userAddr1: {
                type: Sequelize.STRING(30)
            },
            userAddr2: {
                type: Sequelize.STRING(50)
            }
        }, {
            sequelize, // Database Connection
            // underscored: true, // true: underscored, false: camelCase
            underscored: false, // true: underscored, false: camelCase
            // underscored를 false로 하면 camelCase이면서 DB Tool로 조회할 때 테이블명에 더블쿼터 붙혀줘야 함
            timestamp: true, // createAt, updatedAt
            paranoid: true // deletedAt
        });
    };
    static associations(db) {

    };
};