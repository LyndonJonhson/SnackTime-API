const database = require('../database/connection');

class Product{
    async findByEstablishment(establishment){
        try{
            var result = await database.select().table("establishments_products")
                .innerJoin("establishments", "establishments.id", "establishments_products.establishment_id")
                .innerJoin("products", "products.id", "establishments_products.product_id")
                .where("establishment.name", establishment)
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }
}

module.exports = new Product();