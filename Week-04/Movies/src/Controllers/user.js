const ctrl = {}
const model = require('../Models/user')
const bcr = require('../Helper/bcrypt')
const jwt = require('jsonwebtoken')
const genToken = require('../Helper/genToken')
 
ctrl.login = async (req, res, next) => {
   const { email, password } = req.body
   try {
      const findUser = await model.findEmail(email)
      if(findUser.length <= 0){
         throw { status: 401, message: 'User not registered'}
      }

      const check = await bcr.compare(password, findUser[0].password)
      console.log(check, 'dari check ctr');
      if(check == true){
         const result = await genToken(email)
         res.status(200).send(result)
      } else {
         throw { status: 400, message: 'Password wrong'}
      }
   } catch(err){
      res.status(500).send(err)
   }
}

ctrl.register = async (req, res, next) => {
   try {
      const {email, password, username} = req.body
      const role = "member"
      const hashPassword = await bcr.hash(password)
      const findUser = await model.findEmail(email)
           
      if (findUser.length > 0){
         throw { status: 409, message: 'Email already registered'}
      } else {
         const data = await model.Save({email, hashPassword, role, username})
         res.status(200).send(data)
      }
   } catch (error) {
      res.status(500).send(error)
   }
}

module.exports = ctrl