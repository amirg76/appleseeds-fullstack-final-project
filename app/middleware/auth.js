import jwt from "jsonwebtoken";
import { User } from "../models/user/user.model.js";
export const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    console.log(token);
    const decoded = jwt.verify(token, "thisismytoken");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    console.log(user);
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    res.status(401).send("error:'Please authenticate.");
  }
};
// headers: {
//   key: Authorization;
//   value: Bearer + "token";
// }
