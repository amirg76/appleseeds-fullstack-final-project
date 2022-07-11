import { User } from "../models/user/user.model.js";
import { Account } from "../models/user/account.model.js";

export const getAllUsers = async () => {
  return await User.findAllUsers();
};
export const createAllUsers = async () => {
  return await User.createAllTogther();
};
export const deleteUsers = async (productId) => {
  return await User.removeAllUsers();
};
export const getUserById = async (personal_id) => {
  return await User.findUserById(personal_id);
};
export const createNewUser = async (user) => {
  const newUser = new User(user);

  return await newUser.save();
};
export const deleteById = async (req) => {
  await Account.find({ accountNum: { $in: req.account } }).remove();
  return await User.deleteUserById(req.personal_id);
};
export const updateUserTable = async (users) => {
  return await User.updateUserDetalis(users);
};
export const getUserByAcc = async (accountNum) => {
  return await User.find({
    account: { $in: [accountNum] },
  });
};
// (async () => {
//   const user = await User.findOne({});
//   console.log(user._id);
//   // User.findOne({});
//   user.remove();
// })();
