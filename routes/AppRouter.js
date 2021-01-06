const Router = require('express').Router()

const UserRouter = require('./UserRoute')
const AffirmationRouter = require('./AffirmationRouter')
const GoalRouter = require('./GoalRouter')
const AccomplishmentRouter = require('./AccomplishmentRouter')

Router.get('/', (req, res) => res.send("This is the root!*"))

Router.use('/users', UserRouter)
Router.use('/affirmations', AffirmationRouter)
Router.use('/goals', GoalRouter)
Router.use('/accomplishments', AccomplishmentRouter)

module.exports = Router