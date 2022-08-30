const model = {}
const db = require('../config/db')

model.GetAll = (data) => {
   return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM public.schedule`)
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
      db.query(`INSERT INTO public.schedule (movie_id, "jam", "date", "location", price, "address", "studio", "cinema") VALUES($1, $2, $3, $4, $5, $6, $7, $8)`, [
         data.movie_id,
         data.jam,
         data.date,
         data.location,
         data.price,
         data.alamat,
         data.studio,
         data.cinema
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
      db.query(`UPDATE public.schedule SET movie_id = $1, "jam" = $2, "date" = $3, "location" = $4, price = $5, "address" = $6, "studio" = $7, "cinema" = $8 WHERE schedule_id = $9`, [
        data.movie_id,
        data.jam,
        data.date,
        data.location,
        data.price,
        data.alamat,
        data.studio,
        data.cinema,
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
      db.query(`DELETE FROM public.schedule WHERE schedule_id = $1`, [data])
      .then((data)=>{
         resolve(`Data Deleted Successfully`)
      })
      .catch((err)=>{
         reject(err)
      })
   })
}

module.exports = model