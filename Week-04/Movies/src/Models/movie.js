const model = {}
const db = require('../config/db')

model.GetAll = (data) => {
   return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM public.movie`)
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
      db.query(`INSERT INTO public.movie ("name", "release_date", "direct", "duration", "cast", "synopsis", year, "genre", "upload", "upload_path") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [
         data.name,
         data.release_date,
         data.direct,
         data.duration,
         data.cast,
         data.synopsis,
         data.year,
         data.genre,
         data.image,
         data.path
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
   // console.log(data, 'dari model');
   return new Promise((resolve, reject)=>{
      db.query(`UPDATE public.movie SET "name" = $1, "release_date" = $2, "direct" = $3, "duration" = $4, "cast" = $5, "synopsis" = $6, "year" = $8, "genre" = $9, "upload" = $10, "upload_path" = $11 WHERE movie_id = $7`, [
         data.name,
         data.release_date,
         data.direct,
         data.duration,
         data.cast,
         data.synopsis,
         data.id,
         data.year,
         data.genre,
         data.image,
         data.upload_path
      ])
      .then((data)=>{
         resolve('Data has been changed successfully')
      })
      .catch((err)=>{
         reject(err, 'kontol')
      })
   })
}

model.Delete = (data) =>{
   return new Promise((resolve,reject) =>{
      db.query(`DELETE FROM public.movie WHERE movie_id = $1`, [data])
      .then((data)=>{
         resolve('Data Deleted Successfully')
      })
      .catch((err)=>{
         reject(err)
      })
   })
}

model.findName = (data) => {
   return new Promise((resolve, reject) =>{
      db.query(`SELECT * FROM public.movie WHERE name LIKE $1`, [data])
   .then((data)=>{
      resolve(data.rows)
   })
   .catch((err)=>{
      reject(err, 'Data tidak ditemukan')
   })
})
}

model.findById = (data) => {
   return new Promise((resolve, reject) =>{
      db.query(`SELECT * FROM public.movie WHERE movie_id LIKE $1`, [data])
   .then((data)=>{
      resolve(data.rows)
   })
   .catch((err)=>{
      reject(err, 'Data tidak ditemukan')
   })
})
}

model.ascName = (data) => {
   return new Promise((resolve, reject)=>{
      db.query(`SELECT * FROM public.movie ORDER BY name ASC`)
      .then((data)=>{
         resolve(data.rows)
      })
      .catch((err)=>{
         reject(err)
      })
   })
}

model.ascYear = (data) => {
   return new Promise((resolve, reject)=>{
      db.query(`SELECT * FROM public.movie ORDER BY year ASC`)
      .then((data)=>{
         resolve(data.rows)
      })
      .catch((err)=>{
         reject(err)
      })
   })
}


module.exports = model
