const express = require('express');
const HomeController = require('../controllers/HomeController');
const EstablishmentController = require('../controllers/EstablishmentController');
const ProductController = require('../controllers/ProductController');
const ShopController = require('../controllers/ShopController');
const UserController = require('../controllers/UserController');
const Auth = require('../middleware/Auth');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/estabelecimentos', Auth, EstablishmentController.index);
router.get('/:estabelecimento', Auth, ProductController.index);
router.post('/new', Auth, ShopController.create);
router.delete('/delete', Auth, ShopController.remove);
router.get('/carrinho/:user_login', Auth, ShopController.index);
router.post('/user', UserController.create);
router.post('/login', UserController.login);

module.exports = router;