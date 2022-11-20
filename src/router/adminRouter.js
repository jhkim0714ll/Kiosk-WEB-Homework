import express from "express";
import { login, loginPage, adminPage } from "../controller/adminController";
import {
  createProduct,
  updateProductById,
  createProductPage,
  updateProductPage,
  getAllProduct,
  getOneProduct,
} from "../controller/productController";
import { authorizeAccess } from "../middleware";

const adminRouter = express.Router();

adminRouter.get("/", authorizeAccess, adminPage);

adminRouter.get("/product", authorizeAccess, getAllProduct);
adminRouter.get("/product/search/:id", authorizeAccess, getOneProduct);

adminRouter.get("/product/create", authorizeAccess, createProductPage);
adminRouter.post("/product", authorizeAccess, createProduct);

adminRouter.get("/product/update", authorizeAccess, updateProductPage);
adminRouter.patch("/product/update/:id", authorizeAccess, updateProductById);

adminRouter.delete("/product", authorizeAccess);

adminRouter.get("/login", loginPage);
adminRouter.post("/login", login);

export default adminRouter;
