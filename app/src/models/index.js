"use strict";

const { sequelize } = require('./connection.js');
const User = require('./user.js');

const db = {};

db.sequelize = sequelize;

// model
db.User = User;

// model init
User.init(sequelize);

module.exports = db;