import {
  getAllUsers,
  createAllUsers,
  getUserById,
  deleteUsers,
  createNewUser,
  deleteById,
  updateUserTable,
  getUserByAcc,
  loginChk,
  generateToken,
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
    savedUsers.map(async (user) => {
      const token = await generateToken(user);
    });
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
export const createUser = async (req, res) => {
  try {
    const user = req.body;
    // const currentUsers = await getAllUsers();
    const savedUsers = await createNewUser(user);
    // if (_.isEqual(currentUsers, savedUsers)) throw new Error(405);
    // const token = await generateToken(savedUsers);
    // res.send("user create" + savedUsers);
  } catch (error) {
    console.log(error.message);
    if (error.message.includes("E11000")) res.send("11000");
    else res.send(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await deleteById(req.query);
    const savedUsers = await getAllUsers();
    res.send(savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
export const updateTable = async (req, res) => {
  try {
    const users = req.body;
    // const currentUsers = await getAllUsers();
    const savedUsers = await updateUserTable(users);
    // if (_.isEqual(currentUsers, savedUsers)) throw new Error(405);
    // const token = await generateToken(savedUsers);
    // res.send("user create" + savedUsers);
  } catch (error) {
    console.log(error.message);
    if (error.message.includes("E11000")) res.send("11000");
    else res.send(error.message);
  }
};

export const getByAcc = async (req, res) => {
  try {
    const accountNum = req.body.accountNum;
    console.log(accountNum);
    const savedUsers = await getUserByAcc(accountNum);
    res.send(savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { password, email } = req.body;
    const userReq = req.body;
    console.log(userReq);

    const data = await loginChk(userReq);
    const token = await generateToken(data);

    // const publicPro = await getPublicProfile(savedUser);
    // console.log(publicPro);

    res.send({ data, token });
  } catch (error) {
    res.send(error.message);
  }
};
