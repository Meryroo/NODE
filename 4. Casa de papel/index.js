const express = require("express");
const dotenv = require("dotenv")
const connect = require("./src/utils/database")
dotenv.config();

const Character = require("./src/models/Character.model")

const PORT = process.env.PORT;

const server = express();
const router = express.Router();
connect();

// GET TO ALL
router.get("/characters", (req, res) =>{
    return Character.find()
    .then((character) => {
        return res.status(200).json(character)
    })
    .catch((error) => {
        return res.status(500).json(error)
    })
})

//GET BY ID
router.get("/characters/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const character = await Character.findById(id);
        if(character){
            return res.status(200).json(character)
        } else {
            return res.status(404).json("no character found in DB")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

//GET BY NAME
router.get("/characters/name/:name", async (req, res) => {
    const name = req.params.name
    try {
        const character = await Character.find({ name:name })
        if (character){
            return res.status(200).json(character)
        } else {
            return res.status(404).json("no character found in DB")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
   
})


server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});