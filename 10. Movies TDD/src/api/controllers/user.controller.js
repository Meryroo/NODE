const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const {generateToken} = require('../../utils/token')



const getUser = async (req, res, next) => {
    try {
        const user = await User.find()
        return res.status(200).json(user)
    } catch (error) {
        return next('not user found', error)
    }
    


}
const registerUser = async (req, res, next) => {
    try {
        const user = new User(req.body)
        const userExist = await User.findOne({email: user.email})
        if(userExist) return next(new Error('user already exists'))

        const userDB = await user.save()
        return res.status(201).json({name: userDB.name, email: userDB.email})
       
    } catch (error) {
        return next ('error registering user', error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})
    if (!user) return next (new Error())
    if (bcrypt.compareSync(req.body.password, user.password)){
        const token = generateToken(user._id, user.email)
        return res.status(200).json(token)
    }
    } catch (error) {
        return next(error)
    }
    
}

const logoutUser = async (req, res, next) => {
    try {
        const token = null
        return res.status(201).json(token)
    } catch (error) {
        return next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        return res.status(200).json('user deleted')
    } catch (error) {
        return next('error deleting user', error)
    }
}

module. exports = {getUser, registerUser, loginUser,logoutUser, deleteUser }