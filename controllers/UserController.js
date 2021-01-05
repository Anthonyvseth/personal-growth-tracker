const { ValidationError } = require('sequelize')
const { User, Affirmation } = require('../models')


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

const updateUser = async (req, res) => {
    console.log(`HIT account UpdateOne:`, req.body)
    try{
        let user = parseInt(rq.params.id)
        let updateUser = await User.update(req.body, {
            where: {id: user},
            returning: true
        })
        res.send(updateUser)
    } catch (error) {
        throw error
    }
}

const deleteUser = async (req, res) => {
    try { 
        let userId = parseInt(req.params.id)
        await User.destroy({
            where: {id: userId}
        })
        res.send({
            message: `Deleted account with id of: ${userId}`,
            options: {
                deleted: true,
                recordId: userId
            }
        })
    } catch (error) {
        throw error
    }
}

const signIn = async (req, res) => {
    const userEmail = req.body.userEmail
    const userPassword = req.body.password
    try {
        const user = await User.findOne({
            where: {
                email: userEmail,
                password: userPassword
            },
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        console.log("SIGN IN", User)
        res.send(User)
    } catch (error) {
        throw error
    }
}

const createAffirmation = async (req, res) => {
    const userId = parseInt(req.params.user_id)
    console.log(req.body)
    try {
       let affirmationBody = {
        userID: userId,
        content: req.body.content
        }
        let affirmation = await Affirmation.create(affirmationBody)
        res.send(affirmation)
    } catch (error) {
        throw error
    }
}


module.exports = {
    getAll,
    getOne,
    createUser,
    updateUser,
    deleteUser,
    signIn,
    createAffirmation
}
