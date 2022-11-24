import jwt from "jsonwebtoken";
import multer from "multer";
import { tokenSecret } from "./config/secret";
import cookie from "cookie";

export const authorizeAccess = (req, res, next) => {
  if (req.headers.cookie === undefined) {
    return res.redirect("/admin/login");
  }
  const parseCookie = cookie.parse(req.headers.cookie);
  jwt.verify(parseCookie.token, tokenSecret(), (err) => {
    if (err) {
      console.log(err);
      return res.redirect("/admin/login");
    } else {
      next();
    }
  });
};

export const imgsUpload = multer({
  dest: "uploads/",
});
