const jwt = require("jsonwebtoken");

var jwtSecret = "umsegredodaora";

module.exports = function(req, res, next){
    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        const bearer = authToken.split(" ");
        var token = bearer[1];

        try{
            var decoded = jwt.verify(token, jwtSecret);
            if(decoded.login != undefined){
                next();
            }       
        }catch(err){
            res.status(403);
            res.send("Você não está autenticado");
            return;
        }

    }else{
        res.status(403);
        res.send("Você não está autenticado");
        return;
    }
}