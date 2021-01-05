const Router = require('express').Router()

const UserRouter = require('./UserRoute')

Router.get('/', (req, res) => res.send("This is the root!*"))

Router.use('/users', UserRouter)

module.exports = Router