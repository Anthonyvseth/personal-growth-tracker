const Router = require("express").Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getAll)
Router.get('/:id', controller.getOne)
Router.post('/', controller.createUser)
Router.put('/:id', controller.updateUser)
Router.delete('/:id', controller.deleteUser)

module.exports = Router