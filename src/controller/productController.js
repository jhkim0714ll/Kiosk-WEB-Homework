import { executeSql } from "../model/db";
import {
  deleteProduct,
  findAllProduct,
  findOneProduct,
  insertProduct,
  updateProduct,
} from "../model/repository/product";

export const getAllProduct = (req, res) => {
  const product = executeSql(findAllProduct());
  return res.render("admin", { product: product });
};

export const getOneProduct = (req, res) => {
  const { id } = req.params;

  const product = executeSql(findOneProduct(id));
  return res.render("admin", { product: product });
};

export const createProductPage = (req, res) => {
  return res.render("ctrlProduct", { isUpdate: false });
};

export const updateProductPage = (req, res) => {
  return res.render("ctrlProduct", { isUpdate: true });
};

export const createProduct = (req, res) => {
  const { name, money, image, type } = req.body;

  executeSql(insertProduct(name, money, image, type));
  return res.redirect("/admin");
};

export const updateProductById = (req, res) => {
  const { name, money, image, type } = req.body;
  const { id } = req.params;
  executeSql(updateProduct(id, name, money, image, type));
  return res.render("ctrlProduct", { isUpdate: true });
};

export const removeProduct = (req, res) => {
  const { id } = req.params;

  executeSql(deleteProduct(id));
  return res.redirect("/admin");
};
