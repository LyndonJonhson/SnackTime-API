const database = require('../database/connection');

class Product{
    async findByEstablishment(establishment){
        try{
            var result = await database.select([
                    "establishments.name",
                    "products.id",
                    "products.name",
                    "products.type",
                    "products.description",
                    "products.price"
                ])
                .table("establishments_products")
                .innerJoin("establishments", "establishments.id", "establishments_products.id_establishment")
                .innerJoin("products", "products.id", "establishments_products.id_product")
                .where("establishments.slug", establishment)
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }
}

module.exports = new Product();