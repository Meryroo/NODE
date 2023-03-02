const express = require("express")
const Character = require("../models/Character.model")

const router = express.Router();

//GET ALL
router.get("/", async (req, res, next) => {
try {
    const characters = await Character.find()
    return res.status(200).json(characters)
} catch (error) {
    return next(error)
}
})

//CREATE CHARACTER
router.post("/create", async (req, res, next) => {
    try {
        const newCharacter = new Character ({
            name: req.body.name,
            age: req.body.age,
            alias: req.body.alias,
            role: req.body.role

        })
        const createdCharacter = await newCharacter.save()
        return res.status(201).json(createdCharacter)
    } catch (error) {
        next(error)
    }
})

//DELETE CHARACTER
router.delete ("/:id", async (req, res, next) => {
    try {
        const {id} = req.params
        await Character.findByIdAndDelete(id)
        return res.status(200).json("character delete!")
    } catch (error) {
        return next (error)
    }
   
});

//UPDATE CHARACTER
router.put("/edit/:id", async (req, res, next) => {
try {
    const {id} = req.params
    const updatedCharacter = await Character.findByIdAndUpdate(id, req.body,{
        new: true,
    });
        return res.status(200).json(updatedCharacter)
    
} catch (error) {
    return next(error)
}
})

module.exports = router;