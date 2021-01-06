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

module.exports = {
    getGoal
}