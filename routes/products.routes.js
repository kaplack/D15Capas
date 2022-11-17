import { Router } from "express";
import getProductsController from "../controller/Product.controller.js";

const productsRouter = new Router();

productsRouter.get("/", getProductsController);

export default productsRouter;
