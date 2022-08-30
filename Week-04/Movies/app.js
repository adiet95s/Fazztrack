require('dotenv').config()
const express = require('express')
var cors = require('cors')
const server = express()
const main = require('./src/main')
const db = require("./src/config/db")
const errorHandler = require('./src/middleware/errorHandler')
const PORT = process.env.PORT || 8080

async function init(){
	try{
		await db.connect()
      	server.use(express.urlencoded({ extended: true }))
      	server.use(express.json())
		server.use(cors())
      	server.use(main)
		server.use(errorHandler)
      	server.listen(PORT, () => {
         console.log(`Server ready at Port ${PORT}`)
      })
	} catch (error){
		console.log(error)
	}
}
init()