const products = require('../models/productsModule');

const path = require('path')


exports.getProduct = (req, res) => {
  res.sendFile(path.join(__dirname +"/../views/products.html"))
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const color = (req.body.color);

  const product = {
    name,
    color,
  };

  products.push(product);
  res.status(201).json({
    success: true,
    products,
  });
};
