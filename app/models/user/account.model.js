import mongoose from "mongoose";
import { accountSchema } from "./account.schema.js";
accountSchema.statics.removeAllAcc = function () {
  return this.deleteMany();
};
accountSchema.statics.findAllAcc = function () {
  return this.find({});
};
accountSchema.statics.findAccById = function (accnum) {
  return this.findOne({ accountNum: accnum });
};
accountSchema.statics.createAllAccTogther = function () {
  const accounts = [
    {
      id: 1,
      accountNum: 1003,
      cash: 0,
      credit: 0,
      minusInterest: 1.1,
    },
    {
      id: 2,
      accountNum: 10202,
      cash: 0,
      credit: 0,
      minusInterest: 1.4,
    },
    {
      id: 3,
      accountNum: 5713,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      id: 4,
      accountNum: 9966,
      cash: 0,
      credit: 0,
      minusInterest: 1.2,
    },
    {
      id: 5,
      accountNum: 1002,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      id: 6,
      accountNum: 1056,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      id: 7,
      accountNum: 5241,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      id: 8,
      accountNum: 5968,
      cash: 0,
      credit: 0,
      minusInterest: 1.1,
    },
  ];

  return this.create(accounts);
};

const Account = mongoose.model("accounts", accountSchema);

export { Account };
