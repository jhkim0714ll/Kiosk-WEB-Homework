import jwt from "jsonwebtoken";
import { tokenSecret } from "../config/secret";

export const loginPage = (req, res) => {
  res.render("login");
};

export const login = (req, res) => {
  const { id, password } = req.body;
  if (id != "admin" || password != "1234") {
    return res.render("login", { ale: true });
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

export const adminPage = (req, res) => {
  res.render("admin");
};