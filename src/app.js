import express from "express";
import morgan from "morgan";
import authRouter from "./router/authRouter";
import userRouter from "./router/userRouter";
import cors from "cors";

var app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/auth", authRouter);

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${3000} 🚀`);
};

app.listen(3000, handleListening);

export default app;
