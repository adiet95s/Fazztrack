const ctrl = {}
const model = require('../Models/movie')
const pagination = require('../middleware/pagination')


ctrl.getMovie = async (req, res, next) => {
   try {
      const data = await model.GetAll()
      res.status(200).json(data)
   } catch (error) {
      next(error)
   }
}

ctrl.AddData = async (req, res, next) => {
   try {
      const { name, release_date, direct, duration, cast, synopsis, year } = req.body
      const data = await model.Save({ name, release_date, direct, duration, cast, synopsis, year })
      res.status(200).json(data)
   } catch (error) {
      next(error)
   }
}

ctrl.updateData = async (req, res, next) => {
   try {
      const id = +req.params.id
      const { name, release_date, direct, duration, cast, synopsis, year} = req.body
      const data = await model.Update({ name, release_date, direct, duration, cast, synopsis, id, year })
      res.status(200).json(data)
   } catch (error) {
      next(error)
   }
}

ctrl.deleteData = async (req, res, next) => {
   const id = +req.params.id
   try {
      const data = await model.Delete(id)
      res.status(200).json(data)
   } catch (err) {
      next(error)
   }
}

ctrl.findName = async (req, res, next) => {
   try{
      const name = req.query.name
      const data = await model.findName(name)
      res.status(200).json(data)
      console.log(name);
   } catch(err) {
      next(error)
   }
}

ctrl.ascName = async (req,res, next) => {
   try{
      const name = req.query.name
      const year = req.query.year
      if(name === 'name'){
         const data = await model.ascName()
         res.status(200).json(data)
      } else if(year){
         const data = await model.ascYear()
         res.status(200).json(data)
      } else {
         res.status(404).json({message: 'Invalid Data'})
      }
   } catch (error){
      next(error)
   }
}

module.exports = ctrl
