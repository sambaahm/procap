const { Planning } = require('../models')


module.exports = {
    async index(req, res) {
        try {
            const planning = Planning.find({
                where: {}
            })
            res.send(planning)
        } catch (err) {
            res.status(500).send({
                error: 'une erreur est produit lors de fetch'
            })
        }
    },



    async post(req, res) {
        try {
            const planning = Planning.create(req.body)
            res.send(planning)
        } catch (err) {
            res.status(500).send({
                error: 'une erreur est produit lors de creation'
            })
        }
    }

    }
