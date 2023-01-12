const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");
const Todos = require("./models/todos.model");

const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ alter: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const user = await Users.findByPk(id)
    const user = await Users.findOne({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  };
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const result = await Users.update(fields, {
      where: { id }
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  };
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id },
    });
    res.status(204).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  };
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todos.findAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findByPk(id);

    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

app.post("/todos", async (req, res) => {
  const todo = req.body;
  const result = await Todos.create(todo);
  res.status(201).json(result);
});

app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { isComplete } = req.body;
  const todo = await Todos.update({ isComplete }, {
    where: { id }
  });
  res.status(200).json(todo);
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todos.destroy({ where: id });
  res.status(204).json(todo);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
