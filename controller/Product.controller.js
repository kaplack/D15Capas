import getProductsServices from "../services/products.service.js";

const getProductsController = (req, res) => {
  getProductsServices().then((datos) => res.json(datos));
};

export default getProductsController;
