const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define("categories", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

}, {
  timestamps: false,
});

module.exports = Categories;