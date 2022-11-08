import express from "express";
import { getUsers, getUserById } from "../controller/user";

const userRouter = express.Router();

export default userRouter;
