import jwt from "jsonwebtoken";
import multer from "multer";
import { tokenSecret } from "./config/secret";
import cookie from "cookie";

export const authorizeAccess = (req, res, next) => {
  const parseCookie = cookie.parse(req.headers.cookie);
  if (parseCookie === undefined) {
    return res.redirect("/admin/login");
  }
  jwt.verify(parseCookie.token, tokenSecret(), (err) => {
    if (err) {
      console.log(err);
    } else {
      next();
    }
  });
};

export const imgsUpload = multer({
  dest: "uploads/",
});
