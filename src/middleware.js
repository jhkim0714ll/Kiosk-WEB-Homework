import jwt from "jsonwebtoken";
import multer from "multer";
import { tokenSecret } from "./config/secret";

export const authorizeAccess = (req, res, next) => {
  const cookie = req.cookies;
  if (cookie === undefined) {
    return res.redirect("/admin/login");
  }
  jwt.verify(cookie.token, tokenSecret(), (error) => {
    if (error) {
      return res.redirect("/admin/login");
    } else {
      next();
    }
  });
};

export const imgsUpload = multer({
  dest: "uploads/",
});
