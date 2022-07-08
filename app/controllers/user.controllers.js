import {
  getAllUsers,
  createAllUsers,
  getUserById,
  deleteUsers,
} from "../services/user.services.js";

export const getAll = async (req, res) => {
  try {
    const savedUsers = await getAllUsers();
    res.send(savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
export const createAll = async (req, res) => {
  try {
    const savedUsers = await createAllUsers();
    res.send(" Succesfully created ! New data: " + savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteAllUsers = async (req, res) => {
  try {
    const savedUsers = await deleteUsers();
    res.send(savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
export const getById = async (req, res) => {
  try {
    const personal_id = req.body.personal_id;
    console.log(personal_id);
    const savedUsers = await getUserById(personal_id);
    res.send(savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
