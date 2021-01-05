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

module.exports = {
    getAffirmation
}