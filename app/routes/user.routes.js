import { Router } from "express";
import {
  getAll,
  createAll,
  deleteAllUsers,
  getById,
} from "../controllers/user.controllers.js";
const userRouter = Router();

userRouter.get("/get-all-users", getAll);
userRouter.get("/create-all-users", createAll);
userRouter.delete("/delete-all-users", deleteAllUsers);
userRouter.post("/get-by-id", getById);

export { userRouter };
