const { ValidationError } = require('sequelize')
const { User } = require('../models')


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

const createUser = async (req, res) => {
    try {
        let userBody = {
            ...req.body
        }
        const newUser = User.build(userBody)
        await newUser.validate()
        await newUser.save()
        
        res.send(newUser)
    } catch (error) {
        if (error instanceof ValidationError) {
            return console.error('Captured validation error:', error.errors[0].message)
        }
        throw error
    }
}

module.exports = {
    getAll,
    getOne,
    createUser
}
