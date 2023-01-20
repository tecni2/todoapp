const UserServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserServices.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserServices.getById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getUserWithTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithTasks(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  };
};

const getUserWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithCategories(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  };
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    result = await UserServices.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  };
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const result = await UserServices.update(fields, id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  };
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.delete(id);
    res.status(204).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  };
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  getUserWithCategories,
  createUser,
  updateUser,
  deleteUser,
};