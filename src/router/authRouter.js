import express from "express";
import { login } from "../controller/auth";

const authRouter = express.Router();

authRouter.post("/login", login);

export default authRouter;