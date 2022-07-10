import { User } from "../models/user/user.model.js";

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
  console.log(newUser.l_name);
  return await newUser.save();
};
export const deleteById = async (userId) => {
  return await User.deleteUserById(userId);
};
