const mongoose = require("mongoose");
const Character = require("../models/Character.model")

const MONGO_URI="mongodb+srv://meryrooprada:Neoland2023@cluster0.n1npwl5.mongodb.net/CasadepapelDB?retryWrites=true&w=majority"

const CharactersDataSet = [
    {
        name: 'Ursula Corberó',
        age: 32,
        alias: 'Tokio',
      },
      {
        name: 'Pedro Alonso',
        age: 50,
        alias: 'Berlín',
      },
      {
        name: 'Álvaro Morte',
        age: 46,
        alias: 'Profesor',
      },
      {
        name: 'Alba Flores',
        age: 34,
        alias: 'Nairobi',
      },
      {
        name: 'Jaime Lorente',
        age: 29,
        alias: 'Denver',
      },
      {
        name: 'Darko Peric',
        age: 44,
        alias: 'Helsinki',
      },
];

const CharacterDocuments = CharactersDataSet.map((character) => new Character(character));

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( async () => {
    const allCharacters = await Character.find()
    if (Character.length){
        await Character.collection.drop()
        console.log("Coleccion borrada")
    }
}).catch((err) => console.log("Error borrando characters", err))
.then( async () => {
    await Character.insertMany(CharacterDocuments)
    console.log("Colección creada")
}).catch((err) => console.log("Error al insertar Characters"))
.finally(() => mongoose.disconnect());