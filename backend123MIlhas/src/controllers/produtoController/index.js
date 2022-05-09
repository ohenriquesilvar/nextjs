const produtos = require('../../json/produtos.json');

const index = (req, res) =>
  res.status(200).send({
    message: 'Lista de produtos!',
    error: false,
    produtos,
  });

module.exports = {
  index,
};
