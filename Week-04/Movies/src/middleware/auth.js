// const mid = {}
const model = require('../Models/user')
const jwt = require('jsonwebtoken')

const auth_validate = (req, res, next) => {
    const { token } = req.headers
    if(!token){
      res.status(401).send({message: 'Sign in first'})
    } 
    jwt.verify(token, process.env.JWT_KEYS, (err, decode) => {
      if (err) {
        return {status: 401, message: 'Error'}
      } else {
        next()
      }
    })
}

module.exports = auth_validate