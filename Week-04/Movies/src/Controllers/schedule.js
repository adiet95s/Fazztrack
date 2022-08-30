const ctrl = {}
const model = require('../Models/schedule')


ctrl.getSchedule = async (req, res, next) => {
   try {
      const data = await model.GetAll()
      console.log(data);
      res.status(200).send(data)
   } catch (error) {
      res.status(500).send(error)
   }
}

ctrl.AddData = async (req, res, next) => {
   try {
      const { movie_id, jam, date, location, price, alamat, studio, cinema } = req.body
      const data = await model.Save({  movie_id, jam, date, location, price, alamat, studio, cinema })
      res.status(200).send(data)
   } catch (error) {
      res.status(500).send(error)
   }
}

ctrl.updateData = async (req, res, next) => {
   try {
      const id = +req.params.id
      const { movie_id, jam, date, location, price, alamat, studio, cinema } = req.body
      const data = await model.Update({ movie_id, jam, date, location, price, alamat, studio, cinema, id })
      res.status(200).send(data)
   } catch (error) {
      res.status(500).send(error)
   }
}

ctrl.deleteData = async (req, res, next) => {
   const id = +req.params.id
   console.log(id, 'Dari controller');
   try {
      const data = await model.Delete(id)
      res.status(200).send(data)
   } catch (err) {
      res.status(500).send(err)
   }
}

module.exports = ctrl