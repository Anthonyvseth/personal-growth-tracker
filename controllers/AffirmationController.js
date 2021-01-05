const { Affirmation } = require('../models/affirmation')

const getAffirmation = async (req, res) => {
    const affirmId = req.params.id
    try {
        const affirmation = await Affirmation.findbyPk(affirmId)
        res.send(affirmation)
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

module.exports = {
    getAffirmation,
    updateAffirmation
}