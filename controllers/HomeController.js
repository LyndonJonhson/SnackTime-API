class HomeController{
    async index(req, res){
        res.send("API RODANDO!");
    }
}

module.exports = new HomeController();