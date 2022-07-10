import { Router } from "express";
import bodyParser from "body-parser";
import {
  getAll,
  createAll,
  deleteAllUsers,
  getById,
  createUser,
  deleteUser,
} from "../controllers/user.controllers.js";
const userRouter = Router();
userRouter.use(bodyParser.urlencoded({ extended: true }));
// const urlencodedParser=bodyParser.urlencoded({ extended: true })
userRouter.get("/get-all-users", getAll);
userRouter.get("/create-all-users", createAll);
userRouter.delete("/delete-all-users", deleteAllUsers);
userRouter.post("/get-by-id", getById);
userRouter.post("/create-user", createUser);
userRouter.delete("/delete-user", deleteUser);
export { userRouter };
