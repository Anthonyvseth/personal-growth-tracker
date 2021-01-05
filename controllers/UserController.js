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

const getOne = async (req, res) => {
    const userId = req.params.id
    try {
        const oneUser = await User.findByPk(userId, {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        console.log("getting one user", oneUser)
        res.send(oneUser)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAll,
    getOne
}
