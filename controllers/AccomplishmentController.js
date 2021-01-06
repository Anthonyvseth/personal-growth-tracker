const { Accomplishment } = require('../models')

const getAccomplishment = (req, res) => {
    const accomId = req.params.id
    try {
        const accomplishment = await Accomplishment.findbyPk(accomId)
        res.send(accomplishment)
    } catch (error) {
        throw error
    }
}

const updateAccomplishment = async (req, res) => {
    try {
        let accom = parseInt(req.params.id)
        let updateAcom = await Accomplishment.update(req.body, {
            where: {id: accom},
            returning: true
        })
        res.send(updateAcom)
    } catch (error) {
        throw error
    }
}

const deleteAccomplishment = async (req, res) => {
    try {
      let accomId = parseInt(req.params.id)
      await Accomplishment.destroy({
        where: { id: accomId }
      })
      res.send({
        message: `Deleted todo with id of ${accomId}`,
        options: {
          deleted: true,
          recordId: accomId
        }
      })
  
    } catch (error) {
      throw error
    }
  }

module.exports = {
    getAccomplishment,
    updateAccomplishment,
    deleteAccomplishment
}