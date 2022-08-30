const ctrl = {}
const model = require('../Models/booking')


ctrl.getBooking = async (req, res, next) => {
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
      const { schedule_id, seat, date, total_price } = req.body
      const data = await model.Save({  schedule_id, seat, date, total_price })
      res.status(200).send(data)
   } catch (error) {
      res.status(500).send(error)
   }
}

ctrl.updateData = async (req, res, next) => {
   try {
      const id = +req.params.id
      const { schedule_id, seat, date, total_price } = req.body
      const data = await model.Update({ schedule_id, seat, date, total_price, id })
      res.status(200).send(data)
   } catch (error) {
      res.status(500).send(error)
   }
}

ctrl.deleteData = async (req, res, next) => {
   const id = +req.params.id
   try {
      const data = await model.Delete(id)
      res.status(200).send(data)
   } catch (err) {
      res.status(500).send(err)
   }
}

module.exports = ctrl