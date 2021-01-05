const { Affirmation } = require('../models')

const getAffirmation = async (req, res) => {
  const entityId = req.params.id
  try {
    const entity = await Affirmation.findByPk(entityId)
    res.send(entity)
  } catch (error) {
    throw error
  }
}

const updateAffirmation = async (req, res) => {
    try {
        let affirm = parseInt(req.params.id)
        let updateAffirm = await Affirmation.update(req.body, {
            where: {id: affirm},
            returning: true
        })
        res.send(updateAffirm)
    } catch (error) {
        throw error
    }
}

const deleteAffirmation = async (req, res) => {
    try {
      let affirmationId = parseInt(req.params.id)
      await Affirmation.destroy({
        where: { id: affirmationId }
      })
      res.send({
        message: `Deleted todo with id of ${affirmationId}`,
        options: {
          deleted: true,
          recordId: affirmationId
        }
      })
  
    } catch (error) {
      throw error
    }
  }

module.exports = {
    getAffirmation,
    updateAffirmation,
    deleteAffirmation
}