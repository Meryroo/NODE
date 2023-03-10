const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const {MONGO_URI, MONGO_URI_TEST, NODE_ENV} = process.env
const mongoConnect = NODE_ENV == 'test' ? MONGO_URI_TEST : MONGO_URI

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoConnect, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const { name, host } = db.connection
    console.log(`Connected to DB: ${name}, in host: ${host}`)
  } catch (error) {
    console.log('Error connecting to DB', error)
  }
}

module.exports = connect