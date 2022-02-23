/* User Table Model */
"use strict";

const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            user_id: {
                type: Sequelize.STRING(20)
            },
            password: {
                type: Sequelize.STRING(15),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(20)
            },
            email: {
                type: Sequelize.STRING(30)
            },
            phoneNumber: {
                type: Sequelize.STRING(15)
            },
            birth: {
                type: Sequelize.STRING(10)
            },
            address1: {
                type: Sequelize.STRING(30)
            },
            address2: {
                type: Sequelize.STRING(50)
            }
        }, {
            sequelize, // Database Connection
            underscored: true, // true: underscored, false: camelCase
            timestamp: true, // createAt, updatedAt
            paranoid: true // deletedAt
        });
    };
    static associations(db) {

    };
};