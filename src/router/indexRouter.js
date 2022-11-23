import express from "express";

import {
  getBuyProduct,
  homePage,
  indexPage,
  spend,
} from "../controller/indexController";
import multer from "multer";

export const upload = multer();

const indexRouter = express.Router();

indexRouter.get("/home", homePage);

indexRouter.get("/", indexPage);

indexRouter.get("/spend", getBuyProduct);
indexRouter.post("/spend", spend);

export default indexRouter;
