const express = require("express");
const {
  getAllGenres,
  createGenres,
  editGenre,
  deleteGenre,
} = require("../controllers/genres.controller");

const GenreRoutes = express.Router();

GenreRoutes.get("/", getAllGenres);
GenreRoutes.post("/", createGenres);
GenreRoutes.put("/:id", editGenre);
GenreRoutes.delete("/:id", deleteGenre);

module.exports = GenreRoutes;
