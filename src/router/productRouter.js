import express from "express";

import { removeAllProduct } from "../controller/productController";

const productRouter = express.Router();

productRouter.delete("/", removeAllProduct);

export default productRouter;
