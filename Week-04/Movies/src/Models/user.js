const model = {}
const db = require('../config/db')

model.GetAll = (data) => {
   return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM public.user`)
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
      db.query(`INSERT INTO public.user ("email", "password", "role", "username") VALUES($1, $2, $3, $4)`, [
         data.email,
         data.hashPassword,
         data.role,
         data.username,
      ])
         .then((data) => {
            resolve('Data saved successfully')
         })
         .catch((err) => {
            console.log(data, 'dari data');
            reject(err)
         })
   })
}

model.findEmail = (data) => {
   return new Promise((resolve, reject) =>{
      db.query(`SELECT * FROM public.user WHERE email LIKE $1`, [data])
   .then((data)=>{
      resolve(data.rows)
   })
   .catch((err)=>{
      reject(err, 'Data tidak ditemukan')
   })
})
}


module.exports = model