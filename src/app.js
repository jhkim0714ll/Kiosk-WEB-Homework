import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import method from "method-override";

import adminRouter from "./router/adminRouter";
import productRouter from "./router/productRouter";
import spendRouter from "./router/spendRouter";

import { executeSql } from "./model/db";
import { createProductTable } from "./model/repository/product";
import { createSpendTable } from "./model/repository/spend";
import indexRouter from "./router/indexRouter";

const __dirname = path.resolve();

var app = express();
const logger = morgan("dev");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(logger);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(method("_method"));

executeSql(createProductTable());
executeSql(createSpendTable());

const port = 3000;

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/spend", spendRouter);
app.use("/uploads", express.static("uploads"));

app.listen(3000, () => {
  console.log(`✅ Server listenting on port 🚀`);
  console.log(`🔺 User url : http://localhost:${port}`);
  console.log(`🔻 Admin url : http://localhost:${port}/admin`);
});

export default app;
