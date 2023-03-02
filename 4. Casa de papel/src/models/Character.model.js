const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
name: {type: String, required: true},
age: {type: Number, required: true},
alias: {type: String, required: true}
},
{
    timestamps: true
}
);

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;