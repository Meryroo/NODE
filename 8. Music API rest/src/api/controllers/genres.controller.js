const Genre = require("../models/genre.model");

const getAllGenres = async (req, res, next) => {
  try {
    const genres = await Genre.find();
    return res.status(200).json({
      info: "All Factions",
      status: "OK",
      results: genres,
    });
  } catch (error) {
    return next("not genres found", error);
  }
};

const createGenres = async (req, res, next) => {
  try {
    const newGenre = new Genre(req.body);
    const createdGenre = await newGenre.save();
    return res.status(201).json(createdGenre);
  } catch (error) {
    return next("Error creating Genre", error);
  }
};

const editGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newGenre = new Genre(req.body);
    newGenre._id = id;
    const foundGenre = await Genre.findById(id);
    newGenre.artists = [...newGenre.artists, ...foundGenre.artists];
    const updatedGenre = await Genre.findByIdAndUpdate(id, newGenre);
    return res.status(200).json({
      new: newGenre,
      old: updatedGenre,
    });
  } catch (error) {
    return next("error editing genre", error);
  }
};

const deleteGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Genre.findByIdAndDelete(id);
    return res.status(200).json("deleted genre");
  } catch (error) {
    return next("error deleting Genre", error);
  }
};
module.exports = { getAllGenres, createGenres, editGenre, deleteGenre };
