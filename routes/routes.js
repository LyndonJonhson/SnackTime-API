const express = require('express');
const HomeController = require('../controllers/HomeController');
const EstablishmentController = require('../controllers/EstablishmentController');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/estabelecimentos', EstablishmentController.index);

module.exports = router;