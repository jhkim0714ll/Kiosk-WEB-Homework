import express from "express";
import morgan from "morgan";
import authRouter from "./router/auth";
import userRouter from "./router/user";
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
  console.log(
    `✅ Server listenting on port http://localhost:${PORT || 3000} 🚀`
  );
};

app.listen(PORT, handleListening);

export default app;
