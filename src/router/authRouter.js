import express from "express";
import { login, loginPage, logout } from "../controller/authController";

const authRouter = express.Router();

authRouter.get("/login", loginPage);
authRouter.post("/login", login);

authRouter.post("/logout", logout);
export default authRouter;
