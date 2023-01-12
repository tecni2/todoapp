const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Todos = require("./todos.model");
const Categories = require("./categories.model");

const TodosCategories = db.define("todos_categories", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
      model: Categories,
      key: "id",
    }
  },
  todoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "todo_id",
    references: {
      model: Todos,
      key: "id",
    },
  },
}, {
  timestamps: false,
});

module.exports = TodosCategories;