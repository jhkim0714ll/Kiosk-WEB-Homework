import express from "express";

import { homePage, indexPage } from "../controller/indexController";
import multer from "multer";

export const upload = multer();

const indexRouter = express.Router();

indexRouter.get("/home", homePage);

indexRouter.get("/", indexPage);

export default indexRouter;
