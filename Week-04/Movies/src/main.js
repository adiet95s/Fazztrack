const express = require('express')
const Routers = express.Router()
const movie = require('./Routes/movie')
const schedule = require('./Routes/schedule')
const booking = require('./Routes/booking')
const user = require('./Routes/user')
const auth_validate = require('./middleware/auth')


Routers.use('/user', user)
Routers.use('/movie', auth_validate,movie)
Routers.use('/schedule', auth_validate, schedule)
Routers.use('/booking', auth_validate,booking)


module.exports = Routers
