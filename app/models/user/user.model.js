import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";

userSchema.statics.findAllUsers = function () {
  return this.find({});
};

userSchema.statics.removeAllUsers = function () {
  return this.deleteMany();
};
userSchema.statics.findUserById = function (userId) {
  return this.findOne({ personal_id: userId });
};

userSchema.statics.createAllTogther = function () {
  const users = [
    {
      id: 1,
      personal_id: 1234,
      f_name: "בני",
      l_name: "ברמן",
      cash: 0,
      credit: 0,
      account: [1002],
      email: "aaa@bbb.com",
    },
    {
      id: 2,
      personal_id: 1235,
      f_name: "אלי",
      l_name: "הורביץ",
      cash: 0,
      credit: 0,
      account: [1003],
      email: "bbb@ccc.com",
    },
    {
      id: 3,
      personal_id: 1236,
      f_name: "משה",
      l_name: "פרץ",
      cash: 0,
      credit: 0,
      account: [10202],
      email: "ddd@eee.com",
    },
    {
      id: 4,
      personal_id: 1237,
      f_name: "שי",
      l_name: "ברקוביץ",
      cash: 0,
      credit: 0,
      account: [5241, 5968],
      email: "mmm@ggg.com",
    },
    {
      id: 5,
      personal_id: 1238,
      f_name: "מני",
      l_name: "פאר",
      cash: 0,
      credit: 0,
      account: [5713, 9966],
      email: "abc@ggg.com",
    },
    {
      id: 6,
      personal_id: 1239,
      f_name: "מוטי",
      l_name: "ארואסטי",
      cash: 0,
      credit: 0,
      account: [1056],
      email: "fff@ggg.com",
    },
  ];

  return this.create(users);
};

const User = mongoose.model("users", userSchema);

export { User };
