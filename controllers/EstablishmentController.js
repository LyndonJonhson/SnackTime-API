const Establishment = require('../models/Establishment');

class EstablishmentController{
    async index(req, res){
        var establishments = await Establishment.findAll();
        res.json(establishments);
    }
}

module.exports = new EstablishmentController();