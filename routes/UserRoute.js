const Router = require("express").Router()
const controller = require('../controllers/UserController')
const { getToken, verifyToken } = require("../middleware/JwtHandler")

Router.get('/', controller.getAll)
Router.get('/:id', controller.getOne)
Router.post('/', controller.createUser)
Router.put('/:id', controller.updateUser)
Router.delete('/:id', controller.deleteUser)
Router.post('/signin', controller.signIn)
Router.post('/:user_id/affirmations', controller.createAffirmation)
Router.post('/:user_id/goals', controller.createGoal)
Router.post('/:user_id/accomplishments', controller.createAccomplishments)
Router.get('/refresh/session',
    getToken,
    verifyToken,
     controller.RefreshSession)

module.exports = Router