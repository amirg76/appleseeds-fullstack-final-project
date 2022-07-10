import {
  createAllAccounts,
  deleteAccounts,
  getAllAcc,
  getAccById,
  createNewAcc,
  deleteByAcc,
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
export const createAccount = async (req, res) => {
  try {
    console.log(req.body);
    const account = req.body;
    const savedAccounts = await createNewAcc(account);

    // const token = await generateToken(savedUsers);
    // res.send("user create" + savedUsers);
  } catch (error) {
    console.log(error.message);
    if (error.message.includes("E11000")) res.send("11000");
    else res.send(error.message);
    // res.send(error.message);
  }
};
export const deleteAccount = async (req, res) => {
  try {
    const accountNum = req.query.accountNum;

    console.log(accountNum);
    await deleteByAcc(accountNum);
    const savedUsers = await getAllAcc();

    // res.send("delete");
    res.send(savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
