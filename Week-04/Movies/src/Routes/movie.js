const express = require('express')
const Router = express.Router()
const ctrl = require('../Controllers/movie')
// const paginate = require('express-paginate');
const page = require('../middleware/pagination')

Router.get('/', ctrl.getMovie)
Router.post('/', ctrl.AddData)
Router.put('/:id', ctrl.updateData)
Router.delete('/:id', ctrl.deleteData)
Router.get('/search', ctrl.findName)

Router.get('/ascName', ctrl.ascName)


module.exports = Router
