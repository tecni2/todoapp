const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");
const Categories = require("../models/categories.model");
const TodosCategories = require("../models/todos_categories.model");

const users = [
  { username: "Eliezer", email: "eliezer@gmail.com", password: "1234" },
  { username: "Jhorman", email: "jhorman@gmail.com", password: "1234" },
  { username: "Lucero", email: "lucero@gmail.com", password: "1234" }
];

const todos = [
  { title: "Estudiar node", description: "Descripcion para 1", userId: 1 },
  { title: "Pasear al perro", description: "Descripcion para 2", userId: 1 },
  { title: "Lavar platos", userId: 2 },
  { title: "Ir al chequeo mensual", description: "Porque node no me deja", userId: 3 },
];

const categories = [
  { name: "personal", userId: 1 },
  { name: "educacion", userId: 2 },
  { name: "salud", userId: 3 },
  { name: "trabajo", userId: 3 },
  { name: "hogar", userId: 2 },
  { name: "cocina", userId: 1 },
  { name: "deporte", userId: 1 },
  { name: "ocio", userId: 2 },
  { name: "financiero", userId: 3 },
  { name: "entretenimiento", userId: 1 },
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 },
];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con la siembra");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() => {
      categories.forEach(category => Categories.create(category));
    }, 150);
    setTimeout(() => {
      todosCategories.forEach(tc => TodosCategories.create(tc))
    }, 200);
  })
  .catch(error => console.log(error))