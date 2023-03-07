const server = require('./app')


const PORT = 8080;


if (require.main == module) {
  server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
  })
}

module.exports = server;
