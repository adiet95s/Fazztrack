const bcrypt = require('bcrypt')
const bcr = {}

bcr.hash = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const result = await bcrypt.hash(password, salt)
    return result
  } catch(error){
    throw error
  }
}

bcr.compare = async (password, encrypted) => {
  try {
    const result = await bcrypt.compare(password, encrypted)
    return result
  } catch(error){
    throw error
  }
}

module.exports = bcr