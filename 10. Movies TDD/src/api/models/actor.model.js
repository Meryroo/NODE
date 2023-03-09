const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema ({
    name: {type: String, required: true, trim: true},
    age: {type: Number, required: true, trim: true},
    biography: {type: String, required: true, trim: false},
    image: {type: String, required: true, trim: true}
})

const Actor = mongoose.model ('Actor', ActorSchema)
module.exports = Actor