const jwt = require('jsonwebtoken')

const genToken = async (email) => {
  try {
    const payload = {
        email: email
    }
    const token = jwt.sign(payload, process.env.JWT_KEYS, {expiresIn : '30m'})
    const result = {
        msg : 'token created',
        token : token
    }
    return result
  } catch(error){
    throw error
  }
}

module.exports = genToken