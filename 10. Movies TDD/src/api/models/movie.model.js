const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  director: { type: String, required: true, trim: true },
  year: { type: Number, required: true, trim: true },
  poster: { type: String, required: true, trim: true },
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
})

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie
