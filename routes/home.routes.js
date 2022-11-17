import { Router } from "express";
import getHomeController from "../controller/home.controller.js";
import getProductsServices from "../services/products.service.js";
import getUsersServices from "../services/user.service.js";
import logger from "../config/myLogger.js";

const homeRouter = new Router();

homeRouter.get("/", getHomeController);

export default homeRouter;
