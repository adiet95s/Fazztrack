const express = require('express')
const Router = express.Router()
const ctrl = require('../Controllers/user')

Router.post('/login', ctrl.login)
Router.post('/register', ctrl.register)

module.exports = Router
