import jwt from "jsonwebtoken";
import { tokenSecret } from "../config/secret";
import { executeSelect } from "../model/db";
import { findAllProduct } from "../model/repository/product";

export const loginPage = (req, res) => {
  res.render("login");
};

export const login = (req, res) => {
  const { id, password } = req.body;
  if (id != "admin" || password != "1234") {
    return res.render("login", { wrong: "wrong" });
  }
  const token = jwt.sign(
    {
      id: "admin",
    },
    tokenSecret(),
    {
      expiresIn: "1d",
      issuer: "kiosk",
    }
  );
  res.cookie("token", token);
  res.redirect("/admin");
};

export const adminPage = async (req, res) => {
  const product = await executeSelect(findAllProduct());

  return res.render("admin", { product: product });
};
