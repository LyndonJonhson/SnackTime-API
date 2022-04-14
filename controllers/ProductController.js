const Product = require('../models/Product');

class ProductController{
    async index(req, res){
        var establishment = req.params;
        var products = await Product.findByEstablishment(establishment);
        res.json(products);
    }
}

module.exports = new ProductController();