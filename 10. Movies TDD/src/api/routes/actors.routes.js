const express = require('express')
const { upload } = require('../../middlewares/files.middleware')

const { getAllActors, createActors, updateActors, deleteActors} = require('../controllers/actors.controllers')

const ActorRoutes = express.Router();

ActorRoutes.get('/', getAllActors);
ActorRoutes.post('/', upload.single('image'), createActors)
ActorRoutes.delete('/:id', upload.single('image'), deleteActors)
ActorRoutes.put('/:id', upload.single('image'), updateActors)

module.exports = ActorRoutes;