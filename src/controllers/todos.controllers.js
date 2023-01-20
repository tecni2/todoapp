const TodoServices = require("../services/todos.services");

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoServices.getAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
}

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoServices.getById(id);

    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
};

const getTodoWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodoServices.getWithCategories(id);
    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
      details: error.stack,
    });
  };
};

const createTodo = async (req, res) => {
  try {
    const todo = req.body;
    const result = await TodoServices.create(todo);

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { isComplete } = req.body;
    const todo = await TodoServices.update({ isComplete }, id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoServices.delete(id);
    res.status(204).json(todo);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
}

module.exports = {
  getAllTodos,
  getTodoById,
  getTodoWithCategories,
  updateTodo,
  createTodo,
  deleteTodo,
};