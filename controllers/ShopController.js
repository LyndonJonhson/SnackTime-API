const Shop = require('../models/Shop');

class ShopController{   

    async create(req, res){
        var {establishment, product, quantity, total_price, user_login} = req.body;
        var establishmentArray = establishment.split(", ");
        var productArray = product.split(", ");
        var quantityArray = quantity.split(", ");
        var total_priceArray = total_price.split(", ");  

        var result = await Shop.new(establishmentArray, productArray, quantityArray, total_priceArray, user_login);

        if(result.status){
            res.status(201).json({msg: "Colocado no carrinho com sucesso!"});
        }else{
            res.status(500).json({err: result.err});
        }
    }

    async remove(req, res){
        var {user_login, product} = req.body;
        var result = await Shop.delete(user_login, product);
        if(result.status){
            res.status(201).json({msg: "Deletado do carrinho com sucesso!"});
        }else{
            res.status(500).json({err: result.err});
        }
    }

    async index(req, res){
        var {user_login} = req.params;
        console.log(user_login);
        var result = await Shop.findByLogin(user_login);
        res.status(200).json(result);
    }

}

module.exports = new ShopController();