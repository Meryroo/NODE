const express = require('express')
const {getUser, registerUser, loginUser,logoutUser,deleteUser  } = require('../controllers/user.controller')

const UserRoutes = express.Router()

UserRoutes.post('/register', registerUser)
UserRoutes.get('/', getUser)
UserRoutes.post('/login', loginUser)
UserRoutes.post('/logout', logoutUser)
UserRoutes.delete('/:id', deleteUser)

module.exports = UserRoutes