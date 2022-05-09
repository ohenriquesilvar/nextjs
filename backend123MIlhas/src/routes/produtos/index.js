const express = require('express');
const controller = require('../../controllers/produtoController/index');

const routes = express.Router();

routes.get('/index', controller.index);

module.exports = routes;
