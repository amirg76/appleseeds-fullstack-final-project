import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

userSchema.statics.findAllUsers = function () {
  return this.find({});
};

userSchema.statics.removeAllUsers = function () {
  return this.deleteMany();
};
userSchema.statics.findUserById = function (userId) {
  return this.findOne({ personal_id: userId });
};
userSchema.statics.deleteUserById = async function (userId) {
  return this.findOneAndDelete({ personal_id: userId });
};
userSchema.statics.updateUserDetalis = function (users) {
  return this.findOneAndUpdate(
    { personal_id: users.personal_id },
    { ...users }
  );
};

userSchema.methods.getPublicPro = async function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};
userSchema.statics.findByCredentials = async function (userReq) {
  const email = userReq.email;
  const password = userReq.password;

  const user = await this.findOne({ email: email });

  if (!user) {
    throw new Error("user not found");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("password not found");
  }

  return user;
};

// generate auth token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismytoken");
  user.tokens = user.tokens.concat({ token });
  // console.log(user.tokens);
  user.save();
  return token;
};
// hash passwords
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password") || user.isNew) {
    user.password = await bcrypt.hash(user.password, 8);
    // this.password = hash;
  }
  // if (this.isNew) {
  //   this.meta.createdAt = this.meta.updatedAt = Date.now()
  //  }

  // console.log("jusr before saving");
  next();
});

// userSchema.pre("remove", async function (next) {
//   console.log(this.account);

//   await Account.find({ accountNum: { $in: this.account } }).remove(); // 'this' is the client being removed. Provide
//   next();
// });
userSchema.statics.createAllTogther = function () {
  const users = [
    {
      // id: 1,
      personal_id: 1234,
      password: "password",
      f_name: "??????",
      l_name: "????????",
      cash: 0,
      credit: 0,
      account: [1002],
      email: "aaa@bbb.com",
      phone: 66662887,
      address: "???? ?????????? 5",
      city: "??????????????",
    },
    {
      // id: 2,
      personal_id: 1235,
      password: "password",
      f_name: "??????",
      l_name: "????????????",
      cash: 0,
      credit: 0,
      account: [1003],
      email: "bbb@ccc.com",
      phone: 68962887,
      address: "???????????????? 65",
      city: "????-????????",
    },
    {
      // id: 3,
      personal_id: 1236,
      password: "password",
      f_name: "??????",
      l_name: "??????",
      cash: 0,
      credit: 0,
      account: [10202],
      email: "ddd@eee.com",
      phone: 23662887,
      address: "?????????????????? 9",
      city: "??????-??????????",
    },
    {
      // id: 4,
      personal_id: 1237,
      password: "password",
      f_name: "????",
      l_name: "??????????????",
      cash: 0,
      credit: 0,
      account: [5241, 5968],
      email: "mmm@ggg.com",
      phone: 51962987,
      address: "???????????? 14",
      city: "????????",
    },
    {
      // id: 5,
      personal_id: 1238,
      password: "password",
      f_name: "??????",
      l_name: "??????",
      cash: 0,
      credit: 0,
      account: [5713, 9966],
      email: "abc@ggg.com",
      phone: 82412369,
      address: "?????? ?????? 44",
      city: "??????????",
    },
    {
      // id: 6,
      personal_id: 1239,
      password: "password",
      f_name: "????????",
      l_name: "??????????????",
      cash: 0,
      credit: 0,
      account: [1056],
      email: "fff@ggg.com",
      phone: 32198758,
      address: "?????? ?????? 55",
      city: "?????? ??????",
    },
    {
      id: 7,
      personal_id: 9999,
      password: "password",
      f_name: "admin",
      l_name: "admin",
      cash: 0,
      credit: 0,
      account: [],
      email: "admin@admin.com",
      phone: 32198758,
      address: "?????? ",
      city: "??????",
    },
  ];

  return this.create(users);
};

const User = mongoose.model("users", userSchema);

export { User };
