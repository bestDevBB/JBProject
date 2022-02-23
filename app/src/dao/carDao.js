"use strict";

const { Op } = require('sequelize');
const { Car } = require('../models/index.js');

const dao = {
// select
  async selectCar(params) {
    try {
      return await Car.findAll({
        where: {  }
      })
    } catch(err) {
      return err;
    }
  },
  
  // select
  async selectCarAll() {
    
  },

  // insert
  async insertCar(params) {
    try {
      await User.create(params)
      return params;
    } catch(err) {
      return err;
    }
  }
};

module.exports = dao;