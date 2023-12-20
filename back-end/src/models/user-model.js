import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String}, // unique: true
  createdOn: Date,
  password: {type : String, requered: true},
}); 

export const UserModel = mongoose.model("user", userSchema);