const express = require('express')
const {upload} = require('../../middlewares/files.middleware')
const {getAllMovies,createMovies,updateMovie, deleteMovie} = require('../controllers/movie.controller')

const MoviesRoutes = express.Router()

MoviesRoutes.get('/', getAllMovies)
MoviesRoutes.post('/', upload.single('poster'), createMovies)
MoviesRoutes.patch('/:id',upload.single('poster'), updateMovie)
MoviesRoutes.delete('/:id', deleteMovie)

module.exports = MoviesRoutes;
