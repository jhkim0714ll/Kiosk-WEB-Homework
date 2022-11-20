import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

import authRouter from "./router/authRouter";
import productRouter from "./router/productRouter";
import spendRouter from "./router/spendRouter";

import { executeSql } from "./model/db";
import { createUserTable } from "./model/repository/user";
import { createProductTable } from "./model/repository/product";
import { createSpendTable } from "./model/repository/spend";

const __dirname = path.resolve();

var app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

executeSql(createUserTable());
executeSql(createProductTable());
executeSql(createSpendTable());

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/spend", spendRouter);

app.listen(3000, () => {
  console.log(`✅ Server listenting on port http://localhost:${3000} 🚀`);
});

export default app;
