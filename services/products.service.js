import ProductsModel from "../models/products.models.js";
import myConnect from "../config/dbConnect.js";

const getProductsServices = () => {
  myConnect();
  return ProductsModel.find().then((result) => {
    return result;
  });
};

export default getProductsServices;
