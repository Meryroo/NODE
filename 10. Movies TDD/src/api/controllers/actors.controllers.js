const Actor = require('../models/actor.model')
const {deleteImgCloudinary} = require('../../middlewares/files.middleware')

const getAllActors = async (req, res, next) => {
  try {
    const allactors = await Actor.find()
    return res.status(200).json(allactors)
  } catch (error) {
    return next('Not actors found', error)
  }
}
const createActors = async (req, res, next) => {
  try {
    const newActor = new Actor({
      ...req.body,
      image: req.file ? req.file.path : 'not found',
    })
    const createdActor = await newActor.save()
    return res.status(201).json(createdActor)
  } catch (error) {
    return next('error creating actor', error)
  }
}

const updateActors = async (req, res, next) => {
  try {
    const { id } = req.params
    const newActor = await Actor.findById(id)
    newActor._id = id

    if(newActor.image){
        await deleteImgCloudinary(newActor.image)
        newActor.image = req.file.path;
    }
    newActor.name = req.body.name
    newActor.age = req.body.age
    newActor.biography = req.body.biography
    await Actor.findByIdAndUpdate(id, newActor)
    return res.status(200).json(newActor)
  } catch (error) {
    return next("error updating actor", error)
  }
}

const deleteActors = async (req, res, next) => {
    try {
        const {id} = req.params
        const actor = await Actor.findByIdAndDelete(id)
        if(actor.image){
            deleteImgCloudinary(actor.image)
        }
        return res.status(200).json("actor deleted")
    } catch (error) {
        return next ("error deleting actor", error)
    }
}

module.exports = { getAllActors, createActors, updateActors, deleteActors}
