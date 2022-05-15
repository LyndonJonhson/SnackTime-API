const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = "umsegredodaora";

class UserController{
    
    async create(req, res){
        var {login, password} = req.body;
        
        if(login == undefined || password == undefined || login == "" || password == ""){
            res.status(400).json({err: "Dados inválidos!"});
            return;
        }

        var loginExists = await User.loginExists(login);

        if(loginExists){
            res.status(406).json({err: "Login já utilizado!"});
            return;
        }

        var result = await User.new(login, password);
        
        if(result.status){
            res.status(201).send("Usuário criado com sucesso!");
            return;
        }
        res.status(500).json({err: result.err});
    }

    async login(req, res){
        var {login, password} = req.body;
        var user = await User.findByLogin(login);
        if(user != undefined){
            var result = await bcrypt.compare(password, user.password);
            if(result){
                var token = jwt.sign({login: user.login}, jwtSecret);
                res.status(200);
                res.json({token: token});
            }else{
                res.status(406);
                res.send("Senha incorreta");
            }
        }else{
            res.status(406);
            res.send("Usuário inexistente");
        }
    }

}

module.exports = new UserController();