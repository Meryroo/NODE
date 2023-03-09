const jwt = require('jsonwebtoken')

const generateToken = (id, email) => {
    if (!id || !email){
        throw new Error ('email or id is missing')
    }
    return jwt.sign ({id, email}, process.env.JWT_SECRET, {expiresIn: '1d'})
}
const verifyToken = (token) => {
    if (!token){
        throw new Error ('token is missing')
    }
    return jwt.verify (token, process.env.JWT_SECRET)
}

module.exports = {generateToken, verifyToken }
