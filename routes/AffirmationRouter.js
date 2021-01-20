const Router = require('express').Router()
const controller = require('../controllers/AffirmationController')

Router.get('/:id', controller.getAffirmation)
Router.put('/:id', controller.updateAffirmation)
Router.delete('/:id', controller.deleteAffirmation)


module.exports = Router