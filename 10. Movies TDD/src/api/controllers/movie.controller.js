const Movie = require('../models/movie.model')
const {deleteImgCloudinary} = require('../../middlewares/files.middleware.js')

const getAllMovies = async (req, res, next) => {
  try {
    const allmovies = await Movie.find().populate('actors')
    return res.status(200).json(allmovies)
  } catch (error) {
    return next('not movies found', error)
  }
}

const createMovies = async (req, res, next) => {
  try {
    const newMovie = new Movie({
      ...req.body,
      poster: req.file ? req.file.path : 'not found'
    })
    const createdMovie = await newMovie.save()
    return res.status(201).json(createdMovie)
  } catch (error) {
    return next(error)
  }
}

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params
    const newMovie = new Movie(req.body)
    newMovie._id = id
    const originalMovie = await Movie.findById(id);
    newMovie.actors = [
        ...originalMovie.actors,
      ...newMovie.actors,
    ]
    if (newMovie.poster) {
      deleteImgCloudinary(newMovie.poster);
      newMovie.poster = req.file.path;
    }
    await Movie.findByIdAndUpdate(id, newMovie);

    return res.status(200).json(newMovie);
  } catch (error) {
    return next('error editing movie', error)
  }
}

const deleteMovie = async (req, res, next) => {
    try {
        const {id} = req.params
        const movie = await Movie.findByIdAndDelete(id)
        if (movie.poster){deleteImgCloudinary(movie.poster);
        }
        return res.status(200).json('movie deleted')
    } catch (error) {
        return next ('error deleting movie', error)
    }
}
module.exports = { getAllMovies, createMovies,updateMovie,deleteMovie }
