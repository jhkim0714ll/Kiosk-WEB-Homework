import { executeSelect } from "../model/db";
import { findAllProduct } from "../model/repository/product";

export const indexPage = async (req, res) => {
  const product = await executeSelect(findAllProduct());
  return res.render("index", { product: product });
};

export const homePage = (req, res) => {
  return res.render("home");
};

export const getBuyProduct = async (req, res) => {};

export const spend = async (req, res) => {};
