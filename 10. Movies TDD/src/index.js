const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connect = require('./utils/connect')
const ActorRoutes = require('./api/routes/actors.routes')
const MoviesRoutes = require('./api/routes/movies.routes')
const {configCloudinary} = require('./middlewares/files.middleware.js')
const UserRoutes = require('./api/routes/user.routes')
dotenv.config()

const PORT= process.env.PORT


const server = express()
connect()
server.use(cors({
    origin: '*',
    credentials: true
}))
configCloudinary()

server.use(express.json({ limit: '5mb' }))
server.use(express.urlencoded({ limit: '5mb', extended: true }))

server.use('/api/v1/actors', ActorRoutes)
server.use('/api/v1/movies', MoviesRoutes)
server.use('/api/v1/user', UserRoutes)

server.use('*', (req, res, next) => {
    const error = new Error('Route not found')
    return next(error)
  })
  
  server.disabled('x-powered-by')
  
  if (require.main === module) {
server.listen(PORT, () => {
console.log (`Server running on http://localhost:${PORT}`)
})}

module.exports = server