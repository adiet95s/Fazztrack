const express = require('express')
const Router = express.Router()
const ctrl = require('../Controllers/movie')
const upload = require('../middleware/upload')
const author = require('../middleware/author')


Router.get('/',ctrl.getMovie)
Router.post('/', author, upload.single('images'), ctrl.AddData)
Router.put('/:id', author, upload.single('images'), ctrl.updateData)
Router.delete('/:id', author, ctrl.deleteData)
Router.get('/search', ctrl.findName)
Router.get('/ascName', ctrl.ascName)


module.exports = Router
