const express = require('express')
const Router = express.Router()
const ctrl = require('../Controllers/booking')


Router.get('/', ctrl.getBooking)
Router.post('/', ctrl.AddData)
Router.put('/:id', ctrl.updateData)
Router.delete('/:id', ctrl.deleteData)

module.exports = Router
