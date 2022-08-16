const express = require('express')
const Routers = express.Router()
const movie = require('./Routes/movie')
const schedule = require('./Routes/schedule')
const booking = require('./Routes/booking')


Routers.use('/movie', movie)
Routers.use('/schedule', schedule)
Routers.use('/booking', booking)

module.exports = Routers
