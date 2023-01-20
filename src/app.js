const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");
const Todos = require("./models/todos.model");
const userRoutes = require("./routes/users.routes");
const todoRoutes = require("./routes/todos.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", todoRoutes);
app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
