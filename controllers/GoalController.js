const { Goal } = require('../models')

const getGoal = async (req, res) => {
    const goalId = req.params.id
    try {
        const goal = await Goal.findbyPk(goalId)
        res.send(goal)
    } catch (error) {
        throw error
    }
}

const updateGoal = async (req, res) => {
    try {
        let goal = parseInt(req.params.id)
        let updateGoal = await Goal.update(req.body, {
            where: {id: goal},
            returning: true
        })
        res.send(updateGoal)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getGoal,
    updateGoal
}