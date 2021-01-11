const Router = require('express').Router()
const controller = require('../controllers/AccomplishmentController')

Router.get('/:id', controller.getAccomplishment)
Router.put('/:id', controller.updateAccomplishment)
Router.delete('/:id', controller.deleteAccomplishment)

module.exports = Router