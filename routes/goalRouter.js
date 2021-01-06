const Router = require('express').Router()
const controller = require('../controllers/GoalController')

Router.get("/:id", controller.getGoal)

module.exports = Router