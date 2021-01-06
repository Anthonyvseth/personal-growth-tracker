const Router = require('express').Router()
const controller = require('../controllers/GoalController')

Router.get("/:id", controller.getGoal)
Router.post('/:id', controller.updateGoal)
Router.delete('/user', controller.deleteGoal)

module.exports = Router