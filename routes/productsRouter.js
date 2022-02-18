const express = require("express");
const { getProduct, saveProduct } = require("../controllers/productsController");
const router = express.Router();

router.get("/products", getProduct);

router.post("/products", saveProduct);

module.exports = router;