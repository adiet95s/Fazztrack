const model = {}
const db = require('../config/db')

model.GetAll = (data) => {
   return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM public.booking`)
         .then((data) => {
            resolve(data.rows)
         })
         .catch((err) => {
            reject(err)
         })
   })
}

model.Save = (data) => {
   return new Promise((resolve, reject) => {
      db.query(`INSERT INTO public.booking (schedule_id, "seat", "date", total_price) VALUES($1, $2, $3, $4)`, [
         data.schedule_id,
         data.seat,
         data.date,
         data.total_price,
      ])
         .then((data) => {
            resolve('Data saved successfully')
         })
         .catch((err) => {
            reject(err)
         })
   })
}

model.Update = (data) => {
   return new Promise((resolve, reject)=>{
      db.query(`UPDATE public.booking SET schedule_id = $1, "seat" = $2, "date" = $3, total_price = $4 WHERE booking_id = $5`, [
        data.schedule_id,
        data.seat,
        data.date,
        data.total_price,
        data.id
      ])
      .then((data)=>{
         resolve('Data has been changed successfully')
      })
      .catch((err)=>{
         reject(err)
      })
   })
}

model.Delete = (data) =>{
   return new Promise((resolve,reject) =>{
      db.query(`DELETE FROM public.booking WHERE booking_id = $1`, [data])
      .then((data)=>{
         resolve(`Data Deleted Successfully`)
      })
      .catch((err)=>{
         reject(err)
      })
   })
}

module.exports = model