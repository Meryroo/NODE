const express = require("express")
const PORT = 8080;
const server = express();
server.listen(PORT, () => {
    console.log(`Server running on http://localhost${PORT}`)
})