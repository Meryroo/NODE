const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();

const Movie = require("../models/movie.model")

const MONGO_URI = process.env.MONGO_URI

const MoviesDataSet = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

  const movieDocuments = MoviesDataSet.map ((movie) => new Movie(movie));
  mongoose.connect("mongodb+srv://meryrooprada:Neoland2023@cluster0.n1npwl5.mongodb.net/moviesDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then (async () => {
    const allMovies = await Movie.find()
    if (allMovies.length){
        await Movie.collection.drop()
        console.log ("colección borrada")
    }
  }).catch((error) => console.log ("error borrando movies"))
  .then( async () => {
    await Movie.insertMany(movieDocuments)
    console.log("Colección creada")
  }).catch((error) => console.log ("error insertando movies"))
  .finally( () => mongoose.disconnect());