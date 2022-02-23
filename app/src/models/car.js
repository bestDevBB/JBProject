"use strict";

const Sequelize = require("sequelize");

module.exports = class Car extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        car_No: {
          type: Sequelize.STRING(9),
          allowNull: false,
          primaryKey: true,
        },
        price: {
          type: Sequelize.STRING(7),
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        preference: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        grade: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        fuel: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        car_img: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Car",
        tableName: "cars",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  };
  static associate(db) {

  };
};