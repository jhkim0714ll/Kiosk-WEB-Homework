import jwt from "jsonwebtoken";
import { tokenSecret } from "../config/secret";
import { executeSelect } from "../model/db";
import { findAllProduct } from "../model/repository/product";
import cookie from "cookie";

export const loginPage = (req, res) => {
  if (req.headers.cookie == null || req.headers.cookie == undefined) {
    return res.render("login", { failed: false });
  }
  const token = cookie.parse(req.headers.cookie);
  if (token == null || token == undefined) {
    return res.render("login");
  } else return res.redirect("/admin");
};

export const login = (req, res) => {
  const { id, password } = req.body;
  if (id != "admin" || password != "1234") {
    return res.render("login", { failed: true });
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

export const logout = (req, res) => {
  res.clearCookie("id").redirect("/admin/login");
};
