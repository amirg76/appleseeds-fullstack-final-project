import mongoose from "mongoose";
import validator from "validator";

const accountSchema = new mongoose.Schema({
  id: { type: Number },
  accountNum: { type: Number, require: true, unique: true },
  cash: { type: Number, default: 0, require: true },
  credit: { type: Number, default: 0, require: true },
  minusInterest: { type: Number, require: true },
});

export { accountSchema };
