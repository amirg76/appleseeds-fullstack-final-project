import {
  createAllAccounts,
  deleteAccounts,
  getAllAcc,
  getAccById,
} from "../services/account.services.js";
export const createAccAll = async (req, res) => {
  try {
    const savedAccounts = await createAllAccounts();
    res.send(" Succesfully created ! New data: " + savedAccounts);
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteAllAccouts = async (req, res) => {
  try {
    const savedAccounts = await deleteAccounts();
    res.send(savedAccounts);
  } catch (error) {
    res.send(error.message);
  }
};
export const getAllAccounts = async (req, res) => {
  try {
    const savedAccounts = await getAllAcc();
    res.send(savedAccounts);
  } catch (error) {
    res.send(error.message);
  }
};
export const getByAccId = async (req, res) => {
  try {
    console.log("get acc by num");
    const accountNum = req.body.accountNum;
    console.log(accountNum);
    const savedAccounts = await getAccById(accountNum);
    res.send(savedAccounts);
  } catch (error) {
    res.send(error.message);
  }
};
