const Router = require('express').Router()
const controller = require('../controllers/AffirmationController')

Router.get('/:id', controller.getAffirmation)

module.exports = Router