const mongoose = require("mongoose");

const Movie = require("../models/Movie.model")

const MONGO_URI="mongodb+srv://meryrooprada:Neoland2023@cluster0.n1npwl5.mongodb.net/movies?retryWrites=true&w=majority"

const moviesDataSet = [
    { title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"

    },
    { title: "The Good Father",
    director: "Francis For Coppola",
    year: 1972,
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"

    },
     { title: "The Dark Knight",
    director: "David S. Goyer",
    year: 2008,
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg"

    },
     { title: "World War Z",
    director: "Marc Forster",
    year: 2013,
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1SWBSYJsnyhdNRfLI1T6RsCxAQ4.jpg"

    }
];

const movieDocuments = moviesDataSet.map((movie) => new Movie(movie)); 
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async ()=> {
    const allMovies = await Movie.find()
    if (allMovies.length){
        await Movie.collection.drop();
        console.log("coleccion borrada")
    }
}).catch((err) => console.log("Error borrando movies" , err))
.then( async () =>{
    await Movie.insertMany(movieDocuments)
    console.log("coleccion creada")
}).catch((err) => console.log("error insertando movies" , err))
.finally(() => mongoose.disconnect());