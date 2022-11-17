import getUsersServices from "../services/user.service.js";
import getProductsServices from "../services/products.service.js";
import logger from "../config/myLogger.js";

const getHomeController = async (req, res) => {
  const products = await getProductsServices();
  let user = await getUsersServices();
  user = user[0];
  let currUser = req.session.currentUser;
  logger.info("current user", currUser);
  res.render("main", { user, products });
};

export default getHomeController;
