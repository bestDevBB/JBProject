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
            gender: {
                type: Sequelize.STRING(1)
            },
            phoneNumber: {
                type: Sequelize.STRING(15)
            },
            email: {
                type: Sequelize.STRING(30)
            },
            address: {
                type: Sequelize.STRING(150)
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