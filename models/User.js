const database = require('../database/connection');
const bcrypt = require('bcrypt');

class User{

    async new(login, password){
        try{
            var hash = await bcrypt.hash(password, 10);
            await database.insert({login, password: hash}).table("users");
            return {status: true};
        }catch(err){
            console.log(err);
            return {status: false, err: err};
        }
    }

    async loginExists(login){
        try{
            var result = await database.where({login: login}).select().table("users");
            if(result.length > 0){
                return true;
            }
            return false;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    async findByLogin(login){
        try{
            var result = await database.where({login: login}).select().table("users");
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }
        }catch(err){
            console.log(err);
            return undefined;
        }
    }

}

module.exports = new User();