const express = require("express");
const dotenv = require("dotenv")
const characterRoutes = require("./src/routes/character.routes")
const connect = require("./src/utils/database")
dotenv.config();


const PORT = process.env.PORT;

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
const router = express.Router();
connect();

server.use("/api/v1/characters", characterRoutes)

server.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
  });

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});