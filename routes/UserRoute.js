const Router = require("express").Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getAll)
Router.get('/:id', controller.getOne)
Router.post('/', controller.createUser)

module.exports = Router