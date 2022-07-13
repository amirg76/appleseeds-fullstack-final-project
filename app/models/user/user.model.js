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
userSchema.statics.deleteUserById = async function (userId) {
  return this.findOneAndDelete({ personal_id: userId });
};
userSchema.statics.updateUserDetalis = function (users) {
  return this.findOneAndUpdate(
    { personal_id: users.personal_id },
    { ...users }
  );
};

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
      f_name: "בני",
      l_name: "ברמן",
      cash: 0,
      credit: 0,
      account: [1002],
      email: "aaa@bbb.com",
      phone: 66662887,
      address: "בן יהודה 5",
      city: "ירושלים",
    },
    {
      // id: 2,
      personal_id: 1235,
      f_name: "אלי",
      l_name: "הורביץ",
      cash: 0,
      credit: 0,
      account: [1003],
      email: "bbb@ccc.com",
      phone: 68962887,
      address: "בוגרושוב 65",
      city: "תל-אביב",
    },
    {
      // id: 3,
      personal_id: 1236,
      f_name: "משה",
      l_name: "פרץ",
      cash: 0,
      credit: 0,
      account: [10202],
      email: "ddd@eee.com",
      phone: 23662887,
      address: "ארלוזורוב 9",
      city: "פתח-תקווה",
    },
    {
      // id: 4,
      personal_id: 1237,
      f_name: "שי",
      l_name: "ברקוביץ",
      cash: 0,
      credit: 0,
      account: [5241, 5968],
      email: "mmm@ggg.com",
      phone: 51962987,
      address: "שמעוני 14",
      city: "חדרה",
    },
    {
      // id: 5,
      personal_id: 1238,
      f_name: "מני",
      l_name: "פאר",
      cash: 0,
      credit: 0,
      account: [5713, 9966],
      email: "abc@ggg.com",
      phone: 82412369,
      address: "אלי כהן 44",
      city: "חולון",
    },
    {
      // id: 6,
      personal_id: 1239,
      f_name: "מוטי",
      l_name: "ארואסטי",
      cash: 0,
      credit: 0,
      account: [1056],
      email: "fff@ggg.com",
      phone: 32198758,
      address: "הרב קוק 55",
      city: "בני ברק",
    },
  ];

  return this.create(users);
};

const User = mongoose.model("users", userSchema);

export { User };
