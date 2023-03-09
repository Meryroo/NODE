const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require ('validator')

const userSchema = new mongoose.Schema ({
    name:{type: String, trim: true, required: true},
    password:{type: String, required: true, trim: true, minlength: [8, 'password nedds 8 characters minimum']},
    email: {type: String, required: true, trim: true, validate:[validator.isEmail, 'email is not valid']}
},
{
    timestamps: true
})

userSchema.pre('save', async function (next) {
try {
    this.password = await bcrypt.hash(this.password, 10)
    next()
} catch (error) {
    next(error)
}
})

const User = mongoose.model ("User", userSchema)
module.exports = User