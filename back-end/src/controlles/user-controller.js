import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt"

export const users = [];

export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find({});
  res.status(200).json({ users: users_data });
};

export const getUser = (req, res) => {
  const params = req.params;

  const filteredUser = users.filter((cur) => cur.id === params.id);

  if (filteredUser.length === 0) {
    res.status(405).json({ message: "User not found" });
  } else {
    res.status(200).json({ user: filteredUser[0] });
  }
};

export const createUser = async (req, res) => {
  try {
    const body = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await UserModel.create({
      name: body.Name,
      email: body.email,
      password: hashedPassword,
      createdOn: new Date(),
    });

    res.status(200).json({ status: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "aldaa" });
  }
};
