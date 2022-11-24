import express from "express";
import { login, loginPage, adminPage } from "../controller/adminController";
import {
  createProduct,
  updateProductById,
  createProductPage,
  updateProductPage,
  getAllProduct,
  getOneProduct,
  removeProduct,
} from "../controller/productController";
import { authorizeAccess } from "../middleware";

import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

const adminRouter = express.Router();

adminRouter.get("/", authorizeAccess, adminPage);

adminRouter.get("/product", authorizeAccess, getAllProduct);
adminRouter.get("/product/search/:id", authorizeAccess, getOneProduct);

adminRouter.get("/product/create", authorizeAccess, createProductPage);
adminRouter.post(
  "/product",
  authorizeAccess,
  upload.single("file"),
  createProduct
);

adminRouter.get("/product/update/:id", authorizeAccess, updateProductPage);
adminRouter.put(
  "/product/update/:id",
  authorizeAccess,
  upload.single("file"),
  updateProductById
);

adminRouter.delete("/product/:id", authorizeAccess, removeProduct);

adminRouter.get("/spend", authorizeAccess);
adminRouter.get("/spend/:id", authorizeAccess);

adminRouter.get("/login", loginPage);
adminRouter.post("/login", login);

export default adminRouter;
