const express = require('express');
const { isAuth } = require('../../middlewares/auth.middleware');
const { upload } = require('../../middlewares/files.middleware')
const { getAllActors, createActors, updateActors, deleteActors} = require('../controllers/actors.controllers')

const ActorRoutes = express.Router();

ActorRoutes.get('/', getAllActors);
ActorRoutes.post('/', [isAuth], upload.single('image'), createActors)
ActorRoutes.delete('/:id',[isAuth], upload.single('image'), deleteActors)
ActorRoutes.put('/:id',[isAuth], upload.single('image'), updateActors)

module.exports = ActorRoutes;