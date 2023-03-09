const express = require('express')
const { isAuth } = require('../../middlewares/auth.middleware')
const {upload} = require('../../middlewares/files.middleware')
const {getAllMovies,createMovies,updateMovie, deleteMovie} = require('../controllers/movie.controller')
const MoviesRoutes = express.Router()

MoviesRoutes.get('/', getAllMovies)
MoviesRoutes.post('/',[isAuth], upload.single('poster'), createMovies)
MoviesRoutes.patch('/:id',[isAuth], upload.single('poster'), updateMovie)
MoviesRoutes.delete('/:id',[isAuth], deleteMovie)

module.exports = MoviesRoutes;
