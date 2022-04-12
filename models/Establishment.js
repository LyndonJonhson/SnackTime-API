const database = require('../database/connection');

class Establishment{
    async findAll(){
        try{
            var result = await database.select().table("establishments");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }
}

module.exports = new Establishment();