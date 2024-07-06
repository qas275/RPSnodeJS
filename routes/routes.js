const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController');

routes.get('/', homeController.renderHomePage);
routes.post('/play', homeController.playGame);

module.exports = routes;