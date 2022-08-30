const ctrl = {}
const model = require('../Models/movie')
const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

ctrl.getMovie = async (req, res, next) => {
   try {
      console.log(req.params);
      if(req.query.page){
         const data = await model.GetAll()
         const page = req.query.page
         const limit = req.query.limit
         const startIndex = (page-1) * limit
         const endIndex = page * limit
         const result = data.slice(startIndex, endIndex)
         res.status(200).json(result)
      } else {
         const data = await model.GetAll()
         res.status(200).json(data)
      }
      
   } catch (error) {
      next(error)
   }
}

ctrl.AddData = async (req, res, next) => {
   try {
      const image = req.file.filename
      const path = req.file.path
      const { name, release_date, direct, duration, cast, synopsis, year, genre } = req.body
      const data = await model.Save({ name, release_date, direct, duration, cast, synopsis, year, genre, image, path })
      res.status(200).json(data)
   } catch (error) {
      console.log(error);
      next(error)
   }
}

ctrl.updateData = async (req, res, next) => {
   try {
      const id = +req.params.id
      const findById = await model.GetAll()
      let temp = []
      findById.forEach(e => {
         if(e.movie_id == id){
            temp = e
         }
      });

      await unlinkAsync(temp.upload_path)
      const upload_path = req.file.path
      const image = req.file.filename
      const { name, release_date, direct, duration, cast, synopsis, year, genre} = req.body
      const data = await model.Update({ name, release_date, direct, duration, cast, synopsis, id, year, genre, image, upload_path })
      res.status(200).json(data)
   } catch (error) {
      next(error)
   }
}

ctrl.deleteData = async (req, res, next) => {
   const id = +req.params.id
   try {
      const findById = await model.GetAll()
      let temp = []
      findById.forEach(e => {
         if(e.movie_id == id){
            temp = e
         }
      });
      await unlinkAsync(temp.upload_path)
      const data = await model.Delete(id)
      res.status(200).json(data)
   } catch (err) {
      next(err)
   }
}

ctrl.findName = async (req, res, next) => {
   try{
      const name = req.query.name
      const data = await model.findName(name)
      res.status(200).json(data)
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
