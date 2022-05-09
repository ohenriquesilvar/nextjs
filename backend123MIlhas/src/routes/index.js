const express = require('express');

const routes = express.Router();

const produtosRoute = require('./produtos');

routes.use(produtosRoute);

module.exports = routes;
