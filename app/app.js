import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes.js";
import { accountRouter } from "./routes/account.routes.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  cors({
    allowedOrigins: ["http://localhost:5000"],
  })
);
app.use("/users", userRouter);
app.use("/accounts", accountRouter);
export { app };
