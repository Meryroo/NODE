const express = require("express");
const { connect} = require("./database");
const dotenv = require ("dotenv");

const PORT = process.env.PORT;

dotenv.config();

connect();

const server = express();

server.listen(PORT, () => {
    console.log (`Server running on http://localhost:${PORT}`)
})

