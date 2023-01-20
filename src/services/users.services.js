const Categories = require("../models/categories.model");
const Todos = require("../models/todos.model");
const Users = require("../models/users.model");

class UserServices {
  static async getAll() {
    try {
      const users = await Users.findAll();
      return users;
    } catch (error) {
      throw error;
    };
  }

  static async getById(id) {
    try {
      const user = await Users.findByPk(id)
      return user;
    } catch (error) {
      throw error;
    };
  }

  static async getWithTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
        include: {
          attributes: ["title", "description"],
          model: Todos,
          as: "task",
        },
      });
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getWithCategories(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
        include: {
          model: Categories,
          as: "categories",
        },
      });
      return result;
    } catch (error) {
      throw error
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    };
  }

  static async update(fields, id) {
    try {
      const result = await Users.update(fields, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    };
  }
}

module.exports = UserServices;