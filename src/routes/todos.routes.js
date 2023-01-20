const { Router } = require("express");
const { getAllTodos, getTodoById, getTodoWithCategories, createTodo, updateTodo, deleteTodo } = require("../controllers/todos.controllers");
const authMiddleware = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/todos", authMiddleware, getAllTodos);

router.get("/todos/:id", authMiddleware, getTodoById);

router.get("/todos/:id/categories", authMiddleware, getTodoWithCategories);

router.post("/todos", authMiddleware, createTodo);

router.put("/todos/:id", authMiddleware, updateTodo);

router.delete("/todos/:id", authMiddleware, deleteTodo);

module.exports = router;