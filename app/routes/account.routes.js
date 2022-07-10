import { Router } from "express";
import {
  createAccAll,
  deleteAllAccouts,
  getAllAccounts,
  getByAccId,
  createAccount,
  deleteAccount,
} from "../controllers/account.controllers.js";
const accountRouter = Router();

accountRouter.post("/create-all-accounts", createAccAll);
accountRouter.delete("/delete-all-accounts", deleteAllAccouts);
accountRouter.get("/get-all-accounts", getAllAccounts);
accountRouter.post("/get-acc-by-id", getByAccId);
accountRouter.post("/create-account", createAccount);
accountRouter.delete("/delete-account", deleteAccount);

export { accountRouter };
