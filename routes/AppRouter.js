const Router = require('express').Router()

const UserRouter = require('./UserRoute')
const AffirmationRouter = require('./AffirmationRouter')

Router.get('/', (req, res) => res.send("This is the root!*"))

Router.use('/users', UserRouter)
Router.use('/affirmations', AffirmationRouter)

module.exports = Router