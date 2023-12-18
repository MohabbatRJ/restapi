const express = require("express");
const { getAllProducts, getAllProductsTesting } = require("../../controllers/products/productsController");

const routes = express.Router();

routes.route("/").get(getAllProducts);
routes.route("/testing").get(getAllProductsTesting);

module.exports = routes;