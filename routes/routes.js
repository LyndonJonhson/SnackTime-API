const express = require('express');
const HomeController = require('../controllers/HomeController');
const EstablishmentController = require('../controllers/EstablishmentController');
const ProductController = require('../controllers/ProductController');
const ShopController = require('../controllers/ShopController');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/estabelecimentos', EstablishmentController.index);
router.get('/:estabelecimento', ProductController.index);
router.post('/new', ShopController.create);
router.delete('/delete', ShopController.remove);
router.get('/carrinho/:user_login', ShopController.index);

module.exports = router;