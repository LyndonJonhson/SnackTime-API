const express = require('express');
const HomeController = require('../controllers/HomeController');
const EstablishmentController = require('../controllers/EstablishmentController');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/estabelecimentos', EstablishmentController.index);
router.get('/:estabelecimento', ProductController.index);

module.exports = router;