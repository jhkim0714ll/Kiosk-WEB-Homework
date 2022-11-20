import jwt from "jsonwebtoken";
import multer from "multer";
import { tokenSecret } from "./config/secret";

export const authorizeAccess = (req, res, next) => {
  const cookie = req.cookies;
  if (cookie === undefined) {
    return res.status(400).json({
      status: 400,
      error: "쿠키 포맷이 잘못 되었거나 쿠키이 보내지지 않았습니다",
    });
  }
  jwt.verify(cookie.token, tokenSecret(), (error, user) => {
    if (error) {
      if (error.name === "TokenExpired") {
        return res.status(419).json({
          status: 419,
          error: "토큰이 만료되었습니다",
        });
      } else if (error) {
        return res.status(401).json({
          status: 401,
          error: "유효하지 않은 토큰입니다",
        });
      }
    } else {
      req.user = user;
      next();
    }
  });
};

export const imgsUpload = multer({
  dest: "uploads/",
});
