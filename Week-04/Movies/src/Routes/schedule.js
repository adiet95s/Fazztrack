const express = require('express')
const Router = express.Router()
const ctrl = require('../Controllers/schedule')
const upload = require('../middleware/upload')
const author = require('../middleware/author')


Router.get('/', ctrl.getSchedule)
Router.post('/', author, ctrl.AddData)
Router.put('/:id', author, ctrl.updateData)
Router.delete('/:id', author, ctrl.deleteData)

module.exports = Router
