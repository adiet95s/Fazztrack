const model = require('../Models/user')


const author = async (req, res, next)=>{
  try {
    const check = req.query.role
    if(check == 'admin'){
      next()
    } else {
      res.status(403).send({message: 'Forbiden Access'})
    }
  } catch(err){
    res.status(500).send(err)
  }
  
}

module.exports = author