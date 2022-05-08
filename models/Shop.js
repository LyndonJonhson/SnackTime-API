const database = require('../database/connection');

class Shop{    

    async new(establishment, product, quantity, total_price, user_login){
        try{
            for(var i=0 ; i < product.length ; i++){
                await database.insert({
                    establishment: establishment[i], 
                    product: product[i],
                    quantity: parseInt(quantity[i]),
                    total_price: parseFloat(total_price[i]),
                    user_login
                }).table("shop");
            }
            return {status: true};
        }catch(err){
            console.log(err);
            return {status: false, err: "Erro no banco de dados!"};
        }
    }

    async delete(user_login, product){
        try{
            await database.where({user_login: user_login, product: product}).delete().table("shop");
            return {status: true};
        }catch(err){
            console.log(err);
            return {status: false, err: "Erro no banco de dados!"};
        }
    }

    async findByLogin(user_login){
        try{
            var result = await database.where({user_login: user_login}).select().table("shop");
            if(result.length > 0){
                return result; 
            }
            return undefined;
        }catch(err){
            console.log(err);
            return "erro";
        }
    }

}

module.exports = new Shop();