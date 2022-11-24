import { executeSelect, executeSql } from "../model/db";
import {
  deleteProductById,
  deleteAllProduct,
  findAllProduct,
  findOneProduct,
  insertProduct,
  updateProduct,
} from "../model/repository/product";

export const getAllProduct = async (req, res) => {
  const product = await executeSelect(findAllProduct());
  return res.render("admin", { product: product });
};

export const getOneProduct = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (id == undefined || id == "undefined") {
    return;
  }
  const product = await executeSelect(findOneProduct(id));
  return res.render("viewProduct", { product: product[0] });
};

export const createProductPage = (req, res) => {
  return res.render("ctrlProduct", { isUpdate: false });
};

export const updateProductPage = async (req, res) => {
  const { id } = req.params;

  const product = await executeSelect(findOneProduct(id));

  return res.render("ctrlProduct", { isUpdate: true, product: product[0] });
};

export const createProduct = async (req, res) => {
  const { name, price, type } = req.body;

  let originalFileName = "";
  let fileUrl = "";
  if (req.file) {
    originalFileName = req.file.originalname;
    fileUrl = "/uploads/" + req.file.filename;
  }
  executeSql(insertProduct(name, price, fileUrl, type));
  return res.redirect("/admin");
};

export const updateProductById = async (req, res) => {
  const { name, price, type } = req.body;
  const { id } = req.params;

  console.log(req.file);
  let originalFileName = "";
  let fileUrl = "";
  if (req.file) {
    originalFileName = req.file.originalname;
    fileUrl = "/uploads/" + req.file.filename;
  }

  await executeSql(updateProduct(id, name, price, fileUrl, type));
  return res.redirect("/admin");
};

export const removeProduct = async (req, res) => {
  const { id } = req.params;

  await executeSql(deleteProductById(id));
  return res.redirect("/admin");
};

export const removeAllProduct = async (req, res) => {
  await executeSql(deleteAllProduct());
  return res.status(200).json({
    status: 200,
    message: "상품 데이터 모두 삭제 성공",
  });
};
