const { User } = require('../models')
// const {ValidationError} = require('sequelize')

const getAll = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAll
}
