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

const deleteGoal = async (req, res) => {
    try {
      let goalId = parseInt(req.params.id)
      await Goal.destroy({
        where: { id: goalId }
      })
      res.send({
        message: `Deleted todo with id of ${goalId}`,
        options: {
          deleted: true,
          recordId: goalId
        }
      })
  
    } catch (error) {
      throw error
    }
  }

module.exports = {
    getGoal,
    updateGoal,
    deleteGoal
}