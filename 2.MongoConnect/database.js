const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const connect = async () => {
    try {
        const db = await mongoose.connect (MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const {name, host} = db.connection;
        console.log(`Conectado a la DB ${name} en el host ${host}`)
    } catch (error) {
        console.log("Error conectando a la base de datos", error)
    }
};

module.exports = { connect};
