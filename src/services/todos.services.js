const Categories = require("../models/categories.model");
const Todos = require("../models/todos.model");
const TodosCategories = require("../models/todos_categories.model");

class TodoServices {
  static async getAll() {
    try {
      const todos = await Todos.findAll();
      return todos;
    } catch (error) {
      throw error
    };
  }

  static async getById(id) {
    try {
      const todo = await Todos.findByPk(id);
      return todo;
    } catch (error) {
      throw error;
    };
  }

  static async getWithCategories(id) {
    try {
      const result = await Todos.findOne({
        where: { id },
        include: {
          model: TodosCategories,
          as: "categories",
          attributes: [ "id" ],
          include: {
            model: Categories,
            as: "category",
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(todo) {
    try {
      const result = await Todos.create(todo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(fields, id) {
    try {
      const result = await Todos.update(fields, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    };
  }

  static async delete(id) {
    try {
      const result = await Todos.destroy({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = TodoServices;